import { Routes } from '@angular/router';

import { NzDemoPaginationZhComponent } from './zh.component';
import { NzDemoPaginationEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoPaginationEnComponent },
  { path: 'zh', component: NzDemoPaginationZhComponent }
];

export default routes;
