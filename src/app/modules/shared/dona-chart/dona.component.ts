import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [],
})
export class DonaComponent implements OnInit {
  @Input('labels') doughnutChartLabels: string[];
  @Input('data') doughnutChartData: number[];
  @Input('type') doughnutChartType = 'doughnut';
  constructor() {}

  ngOnInit(): void {}
}
