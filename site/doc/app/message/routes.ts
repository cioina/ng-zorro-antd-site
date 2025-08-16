import { Routes } from '@angular/router';

import { NzDemoMessageZhComponent } from './zh.component';
import { NzDemoMessageEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoMessageEnComponent },
  { path: 'zh', component: NzDemoMessageZhComponent }
];

export default routes;
