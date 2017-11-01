import {Component, EventEmitter, Input, Output, OnChanges, SimpleChanges, SimpleChange} from '@angular/core';

@Component({
  selector: 'rxselect',
  template: `
    <div class="clearfix rx-select">
      <div class="rx-disabled-curtain" [hidden]="!disabled"></div>
      <div class="rx-select-result" (click)="startEdit()">
        <div *ngFor="let perobj of list_selected" class="rx-result-item"><div [innerHTML]="perobj.html_selected" ></div>
        <span class="rx-deselect" (click)="handleDeselect($event, perobj)">x</span></div>
      </div>
      <div class="rx-select-done" (click)="endEdit($event)" [hidden]="!is_editing">Done</div>
      <div class="rx-select-list" [hidden]="!is_editing">
        <div class="rx-select-item" [ngClass]="{'is_selected': helperSelected(perobj) }" *ngFor="let perobj of list" (click)="handleClickItem($event, perobj)" [innerHTML]="perobj.html" ></div>
      </div>
    </div>
  `
})
export class RxselectComponent implements OnChanges {
  @Input() options: any;
  @Input() list: string;
  @Input() selected: string;
  @Input() disabled: boolean;  
  @Output() sharedChange = new EventEmitter();
  
  list_selected: any;
  is_editing: any;

  constructor() {
    this.list_selected = this.selected || [];
    this.is_editing = false; 
  }

  ngOnChanges(changes: SimpleChanges) {
    const name: SimpleChange = changes.selected;
    this.list_selected = this.selected;

    // Disable this component
    const disabled: SimpleChange = changes.disabled;
    if (disabled) {
      this.list_selected = [];
      this.sharedChange.emit(this.list_selected);
    }    
  }

  handleClickItem($event, $obj) {
    var tempPos = this.list_selected.indexOf($obj);
    if (tempPos == -1) {
      this.list_selected.push($obj);
    } else {
      this.list_selected.splice(tempPos, 1);
    }
  }

  handleDeselect($event, $obj) {
    var tempPos = this.list_selected.indexOf($obj);
    this.list_selected.splice(tempPos, 1);
  }

  startEdit() {
    if (!this.is_editing) {
      this.is_editing = true;
    }
  }

  endEdit($event) {
    if (this.is_editing) {
      this.is_editing = false;
    }

    // Emit to daddy
    this.sharedChange.emit(this.list_selected);
  }

  ///////////////////
  // H E L P E R S //
  ///////////////////
  helperSelected($obj) {
    return (this.list_selected.indexOf($obj) != -1);
  }
}