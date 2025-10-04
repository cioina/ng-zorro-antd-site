import { Routes } from '@angular/router';

import { NzDemoSwitchZhComponent } from './zh.component';
import { NzDemoSwitchEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoSwitchEnComponent },
  { path: 'zh', component: NzDemoSwitchZhComponent }
];

export default routes;
