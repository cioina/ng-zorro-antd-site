import { Routes } from '@angular/router';

import { NzDemoSpaceZhComponent } from './zh.component';
import { NzDemoSpaceEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoSpaceEnComponent },
  { path: 'zh', component: NzDemoSpaceZhComponent }
];

export default routes;
