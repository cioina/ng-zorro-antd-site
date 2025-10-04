import { Routes } from '@angular/router';

import { NzDemoCalendarZhComponent } from './zh.component';
import { NzDemoCalendarEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoCalendarEnComponent },
  { path: 'zh', component: NzDemoCalendarZhComponent }
];

export default routes;
