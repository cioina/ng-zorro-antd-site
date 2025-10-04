import { Routes } from '@angular/router';

import { NzDemoRateZhComponent } from './zh.component';
import { NzDemoRateEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoRateEnComponent },
  { path: 'zh', component: NzDemoRateZhComponent }
];

export default routes;
