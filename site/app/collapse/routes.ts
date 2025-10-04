import { Routes } from '@angular/router';

import { NzDemoCollapseZhComponent } from './zh.component';
import { NzDemoCollapseEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoCollapseEnComponent },
  { path: 'zh', component: NzDemoCollapseZhComponent }
];

export default routes;
