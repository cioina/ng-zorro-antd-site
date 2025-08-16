import { Routes } from '@angular/router';

import { NzDemoTypographyZhComponent } from './zh.component';
import { NzDemoTypographyEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoTypographyEnComponent },
  { path: 'zh', component: NzDemoTypographyZhComponent }
];

export default routes;
