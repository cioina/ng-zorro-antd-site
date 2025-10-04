import { Routes } from '@angular/router';

import { NzDemoDropdownZhComponent } from './zh.component';
import { NzDemoDropdownEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoDropdownEnComponent },
  { path: 'zh', component: NzDemoDropdownZhComponent }
];

export default routes;
