import { Routes } from '@angular/router';

import { NzDemoMenuZhComponent } from './zh.component';
import { NzDemoMenuEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoMenuEnComponent },
  { path: 'zh', component: NzDemoMenuZhComponent }
];

export default routes;
