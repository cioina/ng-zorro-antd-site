import { Routes } from '@angular/router';

import { NzDemoEmptyZhComponent } from './zh.component';
import { NzDemoEmptyEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoEmptyEnComponent },
  { path: 'zh', component: NzDemoEmptyZhComponent }
];

export default routes;
