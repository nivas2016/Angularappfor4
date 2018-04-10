import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { ChangeTextDirective } from './change-text.directive';
import {sqrtPipe} from './app.sqrt';
import { RoutingComponent } from './routing/routing.component';
import {WebapiService} from './webapi.service';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { MyHttpInterceptor } from "./my-http-interceptor";
import {ToolTipModule} from 'angular2-tooltip';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; // angular 4.x and greater
import { Inject } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    sqrtPipe,
    AppComponent,
    SampleComponent,
    ChangeTextDirective,
    RoutingComponent
  ],
  imports: [
    BrowserModule,FormsModule,NgxPaginationModule,HttpModule,ReactiveFormsModule,HttpClientModule,ToolTipModule, BrowserAnimationsModule,
    RouterModule.forRoot([
      {
      path:'app-routing',
      component:RoutingComponent
      }
    ])
  ],
  providers: [WebapiService,{ 
    provide: HTTP_INTERCEPTORS, 
    useClass: MyHttpInterceptor,
    multi: true 
} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
