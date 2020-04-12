import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContainerComponent } from './containers';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: MainContainerComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
