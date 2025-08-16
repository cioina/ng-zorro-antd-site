import { Routes } from '@angular/router';

import { NzDemoQrCodeZhComponent } from './zh.component';
import { NzDemoQrCodeEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoQrCodeEnComponent },
  { path: 'zh', component: NzDemoQrCodeZhComponent }
];

export default routes;
