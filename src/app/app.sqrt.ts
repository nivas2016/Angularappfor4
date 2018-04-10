import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'sqrt'
})
export class sqrtPipe implements PipeTransform{
transform(val:number):number{
    return Math.sqrt(val);
}
}