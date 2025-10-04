import { Routes } from '@angular/router';

import { NzDemoResultZhComponent } from './zh.component';
import { NzDemoResultEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoResultEnComponent },
  { path: 'zh', component: NzDemoResultZhComponent }
];

export default routes;
