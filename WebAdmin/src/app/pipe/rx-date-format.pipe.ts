import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'rxDateFormat'
})
export class RxDateFormatPipe extends DatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    	return super.transform(value, 'DD/MM/YYYY');
  }

}
