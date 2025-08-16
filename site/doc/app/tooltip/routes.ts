import { Routes } from '@angular/router';

import { NzDemoTooltipZhComponent } from './zh.component';
import { NzDemoTooltipEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoTooltipEnComponent },
  { path: 'zh', component: NzDemoTooltipZhComponent }
];

export default routes;
