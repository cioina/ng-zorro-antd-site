import { Routes } from '@angular/router';

import { NzDemoInputNumberZhComponent } from './zh.component';
import { NzDemoInputNumberEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoInputNumberEnComponent },
  { path: 'zh', component: NzDemoInputNumberZhComponent }
];

export default routes;
