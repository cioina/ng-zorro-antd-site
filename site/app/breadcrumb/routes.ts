import { Routes } from '@angular/router';

import { NzDemoBreadcrumbZhComponent } from './zh.component';
import { NzDemoBreadcrumbEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoBreadcrumbEnComponent },
  { path: 'zh', component: NzDemoBreadcrumbZhComponent }
];

export default routes;
