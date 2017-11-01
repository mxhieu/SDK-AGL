import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Headers, RequestOptions, Request, RequestMethod, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'rxupload',
  template: `
    <div class="clearfix rx-upload">
      <div class="rx-disabled-curtain" [hidden]="!disabled"></div>      
      <div class="rx-upload-browse">Upload file
        <input type="file" class="rx-upload-browse-realone" (change)="fileChangeEvent($event)"/>
      </div>
      <div class="rx-upload-result"><img src="{{tem_src}}" class="img-avatar"></div>
    </div>
  `
})
export class RxuploadComponent implements OnChanges {
  @Input() options: any;
  @Input() disabled: boolean = false;
  @Input() uploadapi: string;
  @Input() curfile: string;
  @Input() imgpath: string;
  @Output() sharedChange = new EventEmitter();

  tem_src: any; 
  http: any;
  filename: any;

  constructor(_http: Http) {
    this.http = _http;
    this.filename = this.curfile;

    if (!this.filename) {
      this.tem_src = '/assets/img/ico_app_default.png';
    } else {
      this.tem_src = this.imgpath + this.filename
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    const name: SimpleChange = changes.curfile;
    this.filename = this.curfile;

    if (!this.filename) {
      this.tem_src = '/assets/img/ico_app_default.png';
    } else {
      this.tem_src = this.imgpath + this.filename;
    }
  }

  fileChangeEvent(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      
      // Show preview img
      let reader = new FileReader();
      reader.onload = (e : any)=> { this.tem_src = e.target.result; }
      reader.readAsDataURL(fileInput.target.files[0]);

      // Upload image and store
      let fileList:FileList = fileInput.target.files;    
      let file:File = fileList[0];
      let formData:FormData = new FormData();
      let headers = new Headers();      
      let options = new RequestOptions({ headers: headers });

      formData.append('uploadFile', file, file.name);
      this.http.post(this.uploadapi, formData, options)
      .map(res => res.json())
      .catch(error => Observable.throw(error))
      .subscribe(
        data => { 
          if (data.success == 1) { 
            this.filename = data.data; 
            this.sharedChange.emit(this.filename);
          }
        },
        error => console.log(error)
      )
    }
  }
}