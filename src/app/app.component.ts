import { Component, ViewChild, ViewEncapsulation, Inject } from '@angular/core';
import {WebapiService} from './webapi.service';
import {Subscription} from 'rxjs';
import {Observable} from 'rxjs/Rx';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import {SampleComponent} from './sample/sample.component';
import {RequestOptions,Headers,Http } from "@angular/http";
import { HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild(SampleComponent) child:SampleComponent; 
  title = 'app';
  today:any;
  service:any;
  users:any;
  emailid:string;
  output:string;
  formdata;
  serverDetails=[];
  //list = new ArrayList;
  serverRole:any;
  message:string;
  messages=[];
  samplearr=[];
  jsonval = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}};
  constructor(private webservice:WebapiService,private httpClient: HttpClient,private http:Http,
  )
  {
    
    this.message="in constructor";
    this.messages.push("12:55:31 PM: Report ID: 79 Status: Generated");
    this.messages.push("12:56:78 PM: Report ID: 80 Status: Generated");
    this.samplearr.push("317828,rinivask");
    console.log("samplearr:"+this.samplearr);
    var lat;
    lat=this.samplearr;  
    lat="\""+lat+"\"";     
    console.log("lat:"+lat);
    var old=lat.split(",");
    console.log("join:"+old);
    var result;
result = "317828,rinivask".split(","); 
console.log(result);
var arr = new Array("First","Second","Third"); 
         
//var str= this.samplearr.split(",").join("~"); 
console.log("str : " + this.message ); 
  }

  

  onEdit(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  ClickedSubmit(data)
  {
    console.log('email id is:'+data.emailid);
    this.emailid=data.emailid;
  }

  saveStatus(statusval){
    console.log('status:'+statusval);
    this.output=this.child.childMethod(statusval);
  }
   
   getuserslist()
   {
      this.webservice.GetUsersList().subscribe(data=>{
      this.users=data;

    })
   }

 method1Call(): void {
    this.httpClient.get("https://jsonplaceholder.typicode.com/users").subscribe(
      success => {
        console.log("Successfully Completed");
        console.log(success);
      }
    );
  }

  method2Call(): void {
    this.httpClient.get("https://jsonplaceholder.typicode.com/user12").subscribe(
      success => {
        console.log("Successfully Completed");
        console.log(success);
      }
    );
  }

  ngOnInit(){
   // this.message="in ngoninit";
    this.today=this.webservice.showTodayDate();
    this.service=this.webservice.servicecomp;
    this.service="Component";
   // this.webservice.servicecomp=this.service;
    this.formdata = new FormGroup({
         emailid: new FormControl("",Validators.compose([
           Validators.required,
           Validators.pattern("[^ @]*@[^ @]*")
         ])),
         passwd: new FormControl("",this.passwordvalidation)
      });
    this.webservice.GetUsersList().subscribe(data=>{
      this.users=data;

    }

    )

     this.webservice.GetServersList().subscribe(data=>{
      this.serverDetails=data;
      console.log("length:"+this.serverDetails.length);
      for(let i=0;i<this.serverDetails.length;i++){
      this.serverRole=this.serverDetails[i].ServerRole;
      for(let j=0;j<this.serverRole.length;j++){
    //  console.log("array:"+this.serverRole[i].Name);
      }
      }
    }

    )
    
  }
  passwordvalidation(formcontrol) {
      if (formcontrol.value.length < 5) {
         return {"passwd" : true};
      }
   }

   fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        let headers = new Headers();
        /** No need to include Content-Type in Angular 4 */
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers });
        this.http.post('', formData, options)
            .map(res => res.json())
            .catch(error => Observable.throw(error))
            .subscribe(
                data => console.log('success'),
                error => console.log(error)
            )
    }
}
}
