import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, BreadcrumbsComponent],
  imports: [SharedModule],
  exports: [HeaderComponent, SidebarComponent, BreadcrumbsComponent],
})
export class TemplateModule {}
