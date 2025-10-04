import { Routes } from '@angular/router';

import { NzDemoIconZhComponent } from './zh.component';
import { NzDemoIconEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoIconEnComponent },
  { path: 'zh', component: NzDemoIconZhComponent }
];

export default routes;
