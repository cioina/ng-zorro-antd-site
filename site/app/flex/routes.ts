import { Routes } from '@angular/router';

import { NzDemoFlexZhComponent } from './zh.component';
import { NzDemoFlexEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoFlexEnComponent },
  { path: 'zh', component: NzDemoFlexZhComponent }
];

export default routes;
