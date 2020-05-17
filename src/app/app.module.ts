import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Containers
import { MainContainerComponent } from './containers';
import { SimpleContainerComponent } from './containers';

// Components
import { TemplateModule } from './modules/template/template.module';
import { AuthLayoutComponent } from './modules/auth/auth-layout/auth-layout.component';

const CONTAINERS = [MainContainerComponent, SimpleContainerComponent];

@NgModule({
  declarations: [AppComponent, ...CONTAINERS, AuthLayoutComponent],
  imports: [BrowserModule, AppRoutingModule, TemplateModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
