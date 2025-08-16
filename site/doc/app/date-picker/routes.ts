import { Routes } from '@angular/router';

import { NzDemoDatePickerZhComponent } from './zh.component';
import { NzDemoDatePickerEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoDatePickerEnComponent },
  { path: 'zh', component: NzDemoDatePickerZhComponent }
];

export default routes;
