import { Routes } from '@angular/router';

import { NzDemoDrawerZhComponent } from './zh.component';
import { NzDemoDrawerEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoDrawerEnComponent },
  { path: 'zh', component: NzDemoDrawerZhComponent }
];

export default routes;
