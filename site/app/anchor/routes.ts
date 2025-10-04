import { Routes } from '@angular/router';

import { NzDemoAnchorZhComponent } from './zh.component';
import { NzDemoAnchorEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoAnchorEnComponent },
  { path: 'zh', component: NzDemoAnchorZhComponent }
];

export default routes;
