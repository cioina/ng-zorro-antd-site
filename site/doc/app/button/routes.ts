import { Routes } from '@angular/router';

import { NzDemoButtonZhComponent } from './zh.component';
import { NzDemoButtonEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoButtonEnComponent },
  { path: 'zh', component: NzDemoButtonZhComponent }
];

export default routes;
