import { Routes } from '@angular/router';

import { NzDemoModalZhComponent } from './zh.component';
import { NzDemoModalEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoModalEnComponent },
  { path: 'zh', component: NzDemoModalZhComponent }
];

export default routes;
