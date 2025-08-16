import { Routes } from '@angular/router';

import { NzDemoDescriptionsZhComponent } from './zh.component';
import { NzDemoDescriptionsEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoDescriptionsEnComponent },
  { path: 'zh', component: NzDemoDescriptionsZhComponent }
];

export default routes;
