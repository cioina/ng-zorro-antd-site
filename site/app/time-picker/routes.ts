import { Routes } from '@angular/router';

import { NzDemoTimePickerZhComponent } from './zh.component';
import { NzDemoTimePickerEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoTimePickerEnComponent },
  { path: 'zh', component: NzDemoTimePickerZhComponent }
];

export default routes;
