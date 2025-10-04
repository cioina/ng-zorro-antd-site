import { Routes } from '@angular/router';

import { NzDemoSpinZhComponent } from './zh.component';
import { NzDemoSpinEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoSpinEnComponent },
  { path: 'zh', component: NzDemoSpinZhComponent }
];

export default routes;
