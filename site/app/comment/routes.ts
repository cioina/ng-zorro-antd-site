import { Routes } from '@angular/router';

import { NzDemoCommentZhComponent } from './zh.component';
import { NzDemoCommentEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoCommentEnComponent },
  { path: 'zh', component: NzDemoCommentZhComponent }
];

export default routes;
