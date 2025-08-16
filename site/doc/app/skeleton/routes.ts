import { Routes } from '@angular/router';

import { NzDemoSkeletonZhComponent } from './zh.component';
import { NzDemoSkeletonEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoSkeletonEnComponent },
  { path: 'zh', component: NzDemoSkeletonZhComponent }
];

export default routes;
