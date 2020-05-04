import { Component } from '@angular/core';
declare function init_plugins();
@Component({
  selector: 'app-simple-container',
  template: `<router-outlet></router-outlet>`
})
export class SimpleContainerComponent {
  constructor() {
    init_plugins();
  }
}
