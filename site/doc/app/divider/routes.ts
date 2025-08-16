import { Routes } from '@angular/router';

import { NzDemoDividerZhComponent } from './zh.component';
import { NzDemoDividerEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoDividerEnComponent },
  { path: 'zh', component: NzDemoDividerZhComponent }
];

export default routes;
