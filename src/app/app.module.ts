import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Containers
import { MainContainerComponent } from './containers';

// Components
import { TemplateModule } from './modules/template/template.module';

const CONTAINERS = [MainContainerComponent];

@NgModule({
  declarations: [AppComponent, ...CONTAINERS],
  imports: [BrowserModule, AppRoutingModule, TemplateModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
