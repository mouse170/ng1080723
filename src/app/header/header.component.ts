import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  count = 0;
  keyword = '';

  fontSize = 24;

  highlightTitle = false;

  ngOnInit() {
  }
  search($event) {
    console.log($event);


    this.highlightTitle = !this.highlightTitle;
    ++this.fontSize;

  }

}
