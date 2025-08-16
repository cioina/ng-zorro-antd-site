import { Routes } from '@angular/router';

import { NzDemoCheckListZhComponent } from './zh.component';
import { NzDemoCheckListEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoCheckListEnComponent },
  { path: 'zh', component: NzDemoCheckListZhComponent }
];

export default routes;
