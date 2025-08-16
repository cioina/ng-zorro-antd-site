import { Routes } from '@angular/router';

import { NzDemoBackTopZhComponent } from './zh.component';
import { NzDemoBackTopEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoBackTopEnComponent },
  { path: 'zh', component: NzDemoBackTopZhComponent }
];

export default routes;
