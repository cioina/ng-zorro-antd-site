import { Routes } from '@angular/router';

import { NzDemoPageHeaderZhComponent } from './zh.component';
import { NzDemoPageHeaderEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoPageHeaderEnComponent },
  { path: 'zh', component: NzDemoPageHeaderZhComponent }
];

export default routes;
