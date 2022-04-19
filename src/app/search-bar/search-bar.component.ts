import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() searchGalaxy = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onExploreGalaxy(value: string) {
    //console.log(value)
    this.searchGalaxy.emit(value);
  }

}
