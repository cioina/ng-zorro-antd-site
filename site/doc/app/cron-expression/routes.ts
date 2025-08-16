import { Routes } from '@angular/router';

import { NzDemoCronExpressionZhComponent } from './zh.component';
import { NzDemoCronExpressionEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoCronExpressionEnComponent },
  { path: 'zh', component: NzDemoCronExpressionZhComponent }
];

export default routes;
