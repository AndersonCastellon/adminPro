import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styles: []
})
export class ColorComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private _document) {}

  ngOnInit() {}

  changeTheme(theme: string, link: any) {
    const href = `assets/css/colors/${theme}.css`;
    this._document.getElementById('theme').setAttribute('href', href);
    this.check(link);
  }

  private check(link: any) {
    const selectores = this._document.getElementsByClassName('selector');

    for (const ref of selectores) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }
}
