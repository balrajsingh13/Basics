import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ViewPageComponent } from './view-page/view-page.component';
import { AuthenticateServiceService } from './authenticate-service.service';

const routes: Routes = [
  {path:'', component:LoginPageComponent},
  {path:'view', component:ViewPageComponent, canActivate : [AuthenticateServiceService]},
  {path:'view/:movie', component:ViewPageComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ViewPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthenticateServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
