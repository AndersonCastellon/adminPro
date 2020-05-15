import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContainerComponent } from './containers';
import { SimpleContainerComponent } from './containers/simple-container/simple-container.component';
import { LoginGuard } from './modules/shared/guards/login.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth/login' },
  {
    path: 'dashboard',
    canActivate: [LoginGuard],
    component: MainContainerComponent
  },
  {
    path: 'auth',
    component: SimpleContainerComponent,
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'chart',
    component: MainContainerComponent,
    loadChildren: () =>
      import('./modules/charts/charts.module').then((m) => m.ChartsModule)
  },
  {
    path: 'settings',
    component: MainContainerComponent,
    loadChildren: () =>
      import('./modules/settings/settings.module').then((m) => m.SettingsModule)
  },
  { path: '**', pathMatch: 'full', redirectTo: 'auth/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
