import { Component, OnInit,Input,Output,EventEmitter,ViewEncapsulation } from '@angular/core';
import {WebapiService} from './../webapi.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SampleComponent implements OnInit {

week=[];
weekdays=[];
weekend=[];
eve:string;
output:string;
checkBoxFlag:boolean=false;
weekdayFlag:boolean=false;
weekendFlag:boolean=false;
@Input()
email:string="";
@Output()
status=new EventEmitter();
service:any;

  constructor(private webservice:WebapiService) {
    this.week=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
    this.weekdays=['monday','tuesday','wednesday','thursday','friday'];
    this.weekend=['sunday','saturday'];    
   }

submittedValue(event){
  this.eve=event.target.value;
  if((this.eve)==("sunday")||(this.eve)==("saturday")){
  this.weekendFlag=true;
  this.weekdayFlag=false;}
  else if((this.eve)==("monday")||(this.eve)==("tuesday")||(this.eve)==("wednesday")||(this.eve)==("thursday")||(this.eve)==("friday")){
  this.weekdayFlag=true;
  this.weekendFlag=false;}
  this.status.emit(true);
}
cancelEvent(event){
  this.status.emit(false);
}
  ngOnInit() {
    this.status.emit(true);
    this.service=this.webservice.servicecomp;
    console.log(this.week.join(","));
  }

childMethod(statusval){
  if(statusval==true){
      this.output="success";
    }
    else{
      this.output="failure";
    }
    return this.output;
}
}
