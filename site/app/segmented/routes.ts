import { Routes } from '@angular/router';

import { NzDemoSegmentedZhComponent } from './zh.component';
import { NzDemoSegmentedEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoSegmentedEnComponent },
  { path: 'zh', component: NzDemoSegmentedZhComponent }
];

export default routes;
