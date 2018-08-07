import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { HostlistenerDirective } from './hostlistener.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirectiveDirective,
    HostlistenerDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
