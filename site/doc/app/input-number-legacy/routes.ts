import { Routes } from '@angular/router';

import { NzDemoInputNumberLegacyZhComponent } from './zh.component';
import { NzDemoInputNumberLegacyEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoInputNumberLegacyEnComponent },
  { path: 'zh', component: NzDemoInputNumberLegacyZhComponent }
];

export default routes;
