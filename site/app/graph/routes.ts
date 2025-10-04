import { Routes } from '@angular/router';

import { NzDemoGraphZhComponent } from './zh.component';
import { NzDemoGraphEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoGraphEnComponent },
  { path: 'zh', component: NzDemoGraphZhComponent }
];

export default routes;
