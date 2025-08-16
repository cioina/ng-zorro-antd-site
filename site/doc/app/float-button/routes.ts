import { Routes } from '@angular/router';

import { NzDemoFloatButtonZhComponent } from './zh.component';
import { NzDemoFloatButtonEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoFloatButtonEnComponent },
  { path: 'zh', component: NzDemoFloatButtonZhComponent }
];

export default routes;
