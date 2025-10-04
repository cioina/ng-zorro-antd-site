import { Routes } from '@angular/router';

import { NzDemoLayoutZhComponent } from './zh.component';
import { NzDemoLayoutEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoLayoutEnComponent },
  { path: 'zh', component: NzDemoLayoutZhComponent }
];

export default routes;
