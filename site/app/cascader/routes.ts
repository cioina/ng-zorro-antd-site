import { Routes } from '@angular/router';

import { NzDemoCascaderZhComponent } from './zh.component';
import { NzDemoCascaderEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoCascaderEnComponent },
  { path: 'zh', component: NzDemoCascaderZhComponent }
];

export default routes;
