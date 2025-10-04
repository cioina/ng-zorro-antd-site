import { Routes } from '@angular/router';

import { NzDemoAlertZhComponent } from './zh.component';
import { NzDemoAlertEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoAlertEnComponent },
  { path: 'zh', component: NzDemoAlertZhComponent }
];

export default routes;
