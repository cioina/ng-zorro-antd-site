import { Routes } from '@angular/router';

import { NzDemoUploadZhComponent } from './zh.component';
import { NzDemoUploadEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoUploadEnComponent },
  { path: 'zh', component: NzDemoUploadZhComponent }
];

export default routes;
