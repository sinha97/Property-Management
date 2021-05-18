import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RestService } from './rest.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from './http-interceptor';
import { AddNewPropertyComponent } from './add-new-property/add-new-property.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNewPropertyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    AddNewPropertyComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    },
    RestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
