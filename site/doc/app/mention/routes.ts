import { Routes } from '@angular/router';

import { NzDemoMentionZhComponent } from './zh.component';
import { NzDemoMentionEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoMentionEnComponent },
  { path: 'zh', component: NzDemoMentionZhComponent }
];

export default routes;
