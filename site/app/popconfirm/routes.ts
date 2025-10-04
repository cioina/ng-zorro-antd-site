import { Routes } from '@angular/router';

import { NzDemoPopconfirmZhComponent } from './zh.component';
import { NzDemoPopconfirmEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoPopconfirmEnComponent },
  { path: 'zh', component: NzDemoPopconfirmZhComponent }
];

export default routes;
