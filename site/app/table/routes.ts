import { Routes } from '@angular/router';

import { NzDemoTableZhComponent } from './zh.component';
import { NzDemoTableEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoTableEnComponent },
  { path: 'zh', component: NzDemoTableZhComponent }
];

export default routes;
