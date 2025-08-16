import { Routes } from '@angular/router';

import { NzDemoAvatarZhComponent } from './zh.component';
import { NzDemoAvatarEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoAvatarEnComponent },
  { path: 'zh', component: NzDemoAvatarZhComponent }
];

export default routes;
