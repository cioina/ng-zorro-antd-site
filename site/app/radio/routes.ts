import { Routes } from '@angular/router';

import { NzDemoRadioZhComponent } from './zh.component';
import { NzDemoRadioEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoRadioEnComponent },
  { path: 'zh', component: NzDemoRadioZhComponent }
];

export default routes;
