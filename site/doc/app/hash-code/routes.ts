import { Routes } from '@angular/router';

import { NzDemoHashCodeZhComponent } from './zh.component';
import { NzDemoHashCodeEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoHashCodeEnComponent },
  { path: 'zh', component: NzDemoHashCodeZhComponent }
];

export default routes;
