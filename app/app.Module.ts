import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './appComponent';

import { AppRoutingModule }     from './app.Routing';

import { Page1Component } from './pages/Page1.Component';
import { Page2Component } from './pages/Page2.Component';


@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ AppComponent, Page1Component, Page2Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
