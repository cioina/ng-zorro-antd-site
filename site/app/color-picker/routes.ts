import { Routes } from '@angular/router';

import { NzDemoColorPickerZhComponent } from './zh.component';
import { NzDemoColorPickerEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoColorPickerEnComponent },
  { path: 'zh', component: NzDemoColorPickerZhComponent }
];

export default routes;
