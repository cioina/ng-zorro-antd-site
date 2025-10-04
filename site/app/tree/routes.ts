import { Routes } from '@angular/router';

import { NzDemoTreeZhComponent } from './zh.component';
import { NzDemoTreeEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoTreeEnComponent },
  { path: 'zh', component: NzDemoTreeZhComponent }
];

export default routes;
