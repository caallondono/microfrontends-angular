import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { APP_BASE_HREF } from '@angular/common';
import {PageTest1Component} from "./page-test1/page-test1.component";
import {PageTest2Component} from "./page-test2/page-test2.component";


const routes: Routes = [
  {path: 'app1/page1', component: PageTest1Component},
  {path: 'app1/page2', component: PageTest2Component},
  { path: '**', component: EmptyRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppRoutingModule { }
