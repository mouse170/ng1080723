import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    @Output() keywordChange = new EventEmitter<string>();
  constructor() { }
  count = 0;
  keyword = '';

  fontSize = 24;

  highlightTitle = false;

  ngOnInit() {
  }
  search($event) {
    this.keywordChange.emit(this.keyword);
    }

}
