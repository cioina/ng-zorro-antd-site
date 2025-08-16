import { Routes } from '@angular/router';

import { NzDemoBadgeZhComponent } from './zh.component';
import { NzDemoBadgeEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoBadgeEnComponent },
  { path: 'zh', component: NzDemoBadgeZhComponent }
];

export default routes;
