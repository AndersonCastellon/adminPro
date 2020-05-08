import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, RouterModule, FormsModule],
  exports: [CommonModule, ReactiveFormsModule, HttpClientModule, FormsModule]
})
export class SharedModule {}
