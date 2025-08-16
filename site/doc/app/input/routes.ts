import { Routes } from '@angular/router';

import { NzDemoInputZhComponent } from './zh.component';
import { NzDemoInputEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoInputEnComponent },
  { path: 'zh', component: NzDemoInputZhComponent }
];

export default routes;
