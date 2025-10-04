import { Routes } from '@angular/router';

import { NzDemoSelectZhComponent } from './zh.component';
import { NzDemoSelectEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoSelectEnComponent },
  { path: 'zh', component: NzDemoSelectZhComponent }
];

export default routes;
