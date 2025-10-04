import { Routes } from '@angular/router';

import { NzDemoStepsZhComponent } from './zh.component';
import { NzDemoStepsEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoStepsEnComponent },
  { path: 'zh', component: NzDemoStepsZhComponent }
];

export default routes;
