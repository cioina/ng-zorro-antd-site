import { Routes } from '@angular/router';

import { NzDemoExperimentalImageZhComponent } from './zh.component';
import { NzDemoExperimentalImageEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoExperimentalImageEnComponent },
  { path: 'zh', component: NzDemoExperimentalImageZhComponent }
];

export default routes;
