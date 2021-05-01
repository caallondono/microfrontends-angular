import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app1-page-test1',
  templateUrl: './page-test1.component.html',
  styleUrls: ['./page-test1.component.css']
})
export class PageTest1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('PageTest1Component');
  }

}
