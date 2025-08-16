import { Routes } from '@angular/router';

import { NzDemoTabsZhComponent } from './zh.component';
import { NzDemoTabsEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoTabsEnComponent },
  { path: 'zh', component: NzDemoTabsZhComponent }
];

export default routes;
