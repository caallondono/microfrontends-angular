import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app1-page-test2',
  templateUrl: './page-test2.component.html',
  styleUrls: ['./page-test2.component.css']
})
export class PageTest2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('PageTest2Component');
  }

}
