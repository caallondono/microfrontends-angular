import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { PageTest1Component } from './page-test1/page-test1.component';
import { PageTest2Component } from './page-test2/page-test2.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    PageTest1Component,
    PageTest2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
