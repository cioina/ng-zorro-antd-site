import { Routes } from '@angular/router';

import { NzDemoAffixZhComponent } from './zh.component';
import { NzDemoAffixEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoAffixEnComponent },
  { path: 'zh', component: NzDemoAffixZhComponent }
];

export default routes;
