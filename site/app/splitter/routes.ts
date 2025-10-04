import { Routes } from '@angular/router';

import { NzDemoSplitterZhComponent } from './zh.component';
import { NzDemoSplitterEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoSplitterEnComponent },
  { path: 'zh', component: NzDemoSplitterZhComponent }
];

export default routes;
