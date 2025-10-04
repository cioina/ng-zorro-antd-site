import { Routes } from '@angular/router';

import { NzDemoPopoverZhComponent } from './zh.component';
import { NzDemoPopoverEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoPopoverEnComponent },
  { path: 'zh', component: NzDemoPopoverZhComponent }
];

export default routes;
