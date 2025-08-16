import { Routes } from '@angular/router';

import { NzDemoStatisticZhComponent } from './zh.component';
import { NzDemoStatisticEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoStatisticEnComponent },
  { path: 'zh', component: NzDemoStatisticZhComponent }
];

export default routes;
