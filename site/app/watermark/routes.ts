import { Routes } from '@angular/router';

import { NzDemoWatermarkZhComponent } from './zh.component';
import { NzDemoWatermarkEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoWatermarkEnComponent },
  { path: 'zh', component: NzDemoWatermarkZhComponent }
];

export default routes;
