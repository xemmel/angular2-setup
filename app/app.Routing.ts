import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Page1Component } from './pages/Page1.Component';
import { Page2Component } from './pages/Page2.Component';

const routes: Routes = [
  { path: '', redirectTo: '/page1', pathMatch: 'full' },
  { path: 'page1',  component: Page1Component },
  { path: 'page2',  component: Page2Component }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}