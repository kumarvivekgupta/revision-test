import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { OAuthModule } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';
import { SignInCallbackComponent } from './misc/sign-in-callback.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { GlobalErrorHandler } from './misc/global-error-handler';
// import { NgxCrudModule, CacheLocation } from 'projects/ngx-crud/src/service';

// const errHandler = (err) => {
//   alert(err);
// };
@NgModule({
  declarations: [
    AppComponent,
    SignInCallbackComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    SharedModule,
    MaterialModule,
    ToastrModule.forRoot(),
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: [
          'https://localhost:5001', environment.APIURL
        ],
        sendAccessToken: true
      }
    }),
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    })
    // NgxCrudModule.forRoot({
    //   ApiEndpoint: environment.APIURL,
    //   cache: CacheLocation.Session,
    //   errorHandler: errHandler
    // })
  ],
  providers: [[
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }
  ]],
  bootstrap: [AppComponent]
})
export class AppModule { }


