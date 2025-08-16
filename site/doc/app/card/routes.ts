import { Routes } from '@angular/router';

import { NzDemoCardZhComponent } from './zh.component';
import { NzDemoCardEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoCardEnComponent },
  { path: 'zh', component: NzDemoCardZhComponent }
];

export default routes;
