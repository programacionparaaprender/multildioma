import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Requerimientos MDBBootstrap
import { MDBBootstrapModule } from 'angular-bootstrap-md';

//Requerimientos NGX-Translate
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';

export function cargarTraductor(http: HttpClient) {
  return new TranslateHttpLoader(http, '../../assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (cargarTraductor),
        deps: [HttpClient]
      }
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
