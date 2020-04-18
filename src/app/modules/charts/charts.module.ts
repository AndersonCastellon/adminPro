import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { DonaChartModule } from '../shared/dona-chart/dona-chart.module';

const ROUTES: Routes = [{ path: '', component: ChartComponent }];

@NgModule({
  declarations: [ChartComponent],
  imports: [CommonModule, DonaChartModule, RouterModule.forChild(ROUTES)],
})
export class ChartsModule {}
