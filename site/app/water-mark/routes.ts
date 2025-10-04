import { Routes } from '@angular/router';

import { NzDemoWaterMarkZhComponent } from './zh.component';
import { NzDemoWaterMarkEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoWaterMarkEnComponent },
  { path: 'zh', component: NzDemoWaterMarkZhComponent }
];

export default routes;
