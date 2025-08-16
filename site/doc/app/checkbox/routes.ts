import { Routes } from '@angular/router';

import { NzDemoCheckboxZhComponent } from './zh.component';
import { NzDemoCheckboxEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoCheckboxEnComponent },
  { path: 'zh', component: NzDemoCheckboxZhComponent }
];

export default routes;
