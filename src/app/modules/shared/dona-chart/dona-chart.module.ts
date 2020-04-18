import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonaComponent } from './dona.component';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [DonaComponent],
  imports: [CommonModule, ChartsModule],
  exports: [DonaComponent],
})
export class DonaChartModule {}
