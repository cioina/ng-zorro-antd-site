import { Routes } from '@angular/router';

import { NzDemoTimelineZhComponent } from './zh.component';
import { NzDemoTimelineEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoTimelineEnComponent },
  { path: 'zh', component: NzDemoTimelineZhComponent }
];

export default routes;
