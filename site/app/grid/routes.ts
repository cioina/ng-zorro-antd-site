import { Routes } from '@angular/router';

import { NzDemoGridZhComponent } from './zh.component';
import { NzDemoGridEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoGridEnComponent },
  { path: 'zh', component: NzDemoGridZhComponent }
];

export default routes;
