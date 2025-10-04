import { Routes } from '@angular/router';

import { NzDemoTreeViewZhComponent } from './zh.component';
import { NzDemoTreeViewEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoTreeViewEnComponent },
  { path: 'zh', component: NzDemoTreeViewZhComponent }
];

export default routes;
