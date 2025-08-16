import { Routes } from '@angular/router';

import { NzDemoFormZhComponent } from './zh.component';
import { NzDemoFormEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoFormEnComponent },
  { path: 'zh', component: NzDemoFormZhComponent }
];

export default routes;
