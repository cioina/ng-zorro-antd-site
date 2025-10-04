import { Routes } from '@angular/router';

import { NzDemoListZhComponent } from './zh.component';
import { NzDemoListEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoListEnComponent },
  { path: 'zh', component: NzDemoListZhComponent }
];

export default routes;
