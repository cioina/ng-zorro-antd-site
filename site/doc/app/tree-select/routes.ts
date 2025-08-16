import { Routes } from '@angular/router';

import { NzDemoTreeSelectZhComponent } from './zh.component';
import { NzDemoTreeSelectEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoTreeSelectEnComponent },
  { path: 'zh', component: NzDemoTreeSelectZhComponent }
];

export default routes;
