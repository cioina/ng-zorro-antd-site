import { Routes } from '@angular/router';

import { NzDemoNotificationZhComponent } from './zh.component';
import { NzDemoNotificationEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoNotificationEnComponent },
  { path: 'zh', component: NzDemoNotificationZhComponent }
];

export default routes;
