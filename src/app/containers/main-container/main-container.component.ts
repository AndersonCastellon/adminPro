import { Component, OnInit } from '@angular/core';
declare function init_plugins();
@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styles: []
})
export class MainContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    init_plugins();
  }
}
