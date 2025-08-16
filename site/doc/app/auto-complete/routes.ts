import { Routes } from '@angular/router';

import { NzDemoAutoCompleteZhComponent } from './zh.component';
import { NzDemoAutoCompleteEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoAutoCompleteEnComponent },
  { path: 'zh', component: NzDemoAutoCompleteZhComponent }
];

export default routes;
