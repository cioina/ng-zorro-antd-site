import { Routes } from '@angular/router';

import { NzDemoProgressZhComponent } from './zh.component';
import { NzDemoProgressEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoProgressEnComponent },
  { path: 'zh', component: NzDemoProgressZhComponent }
];

export default routes;
