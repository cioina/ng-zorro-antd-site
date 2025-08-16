import { Routes } from '@angular/router';

import { NzDemoTagZhComponent } from './zh.component';
import { NzDemoTagEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoTagEnComponent },
  { path: 'zh', component: NzDemoTagZhComponent }
];

export default routes;
