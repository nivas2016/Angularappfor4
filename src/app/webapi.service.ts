import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WebapiService {

servicecomp="This is service component";
productivityData=[];
  constructor(private http:Http) { }
showTodayDate(){
  let todayDate=new Date();
  return todayDate;
}

GetUsersList(){
  this.productivityData = [{"RegionName": "5prod","ProductName": "QNXT", "PrimaryServerName": "ABN-QNX-DHX-P04","EnvId": "1","ServerRole": "DH"}]; 
  let params=new URLSearchParams();
  params.append('RegionName',"5prod");
  params.append('ProductName',"QNXT");
  params.append('PrimaryServerName',"ABN-QNX-DHX-P04");
  params.append('ServerRole',"DH");
  console.log("params val:"+JSON.stringify(params.toString()));
return this.http.get("assets/users.json")
.map((response)=>(response).json());
}

GetServersList(){
return this.http.get("assets/servers.json")
.map((response)=>(response).json());
}
}
