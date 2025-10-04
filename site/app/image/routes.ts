import { Routes } from '@angular/router';

import { NzDemoImageZhComponent } from './zh.component';
import { NzDemoImageEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoImageEnComponent },
  { path: 'zh', component: NzDemoImageZhComponent }
];

export default routes;
