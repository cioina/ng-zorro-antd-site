import { Routes } from '@angular/router';

import { NzDemoTransferZhComponent } from './zh.component';
import { NzDemoTransferEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoTransferEnComponent },
  { path: 'zh', component: NzDemoTransferZhComponent }
];

export default routes;
