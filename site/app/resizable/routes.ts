import { Routes } from '@angular/router';

import { NzDemoResizableZhComponent } from './zh.component';
import { NzDemoResizableEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoResizableEnComponent },
  { path: 'zh', component: NzDemoResizableZhComponent }
];

export default routes;
