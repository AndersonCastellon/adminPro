import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorComponent } from './color/color.component';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [{ path: '', component: ColorComponent }];

@NgModule({
  declarations: [ColorComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES)]
})
export class SettingsModule {}
