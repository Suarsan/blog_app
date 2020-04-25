import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateTransform'
})
export class DateTransformPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const opt = args;
    switch (opt) {
      case 'ago':
      return moment(value).fromNow();
      case 'time':
      return value / 60000;
    }
  }

}
