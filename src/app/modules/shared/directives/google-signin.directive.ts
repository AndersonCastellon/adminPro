import {
  Directive,
  ElementRef,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
declare const gapi: any;

@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective implements OnInit {
  private CLIENT_ID =
    '583675096309-d79lf68fm1kfehf0qbgc3ijkud5f5b0p.apps.googleusercontent.com';
  private auth2: any;

  @Output() signin: EventEmitter<string>;
  constructor(private element: ElementRef) {
    this.signin = new EventEmitter();
  }

  ngOnInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: this.CLIENT_ID,
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });

      this.attachSignin();
    });
  }

  private attachSignin() {
    this.auth2.attachClickHandler(
      this.element.nativeElement,
      {},
      (googleUser: any) => {
        const gToken = googleUser.getAuthResponse().id_token;
        this.signin.emit(gToken);
      }
    );
  }
}
