import { Routes } from '@angular/router';

import { NzDemoSliderZhComponent } from './zh.component';
import { NzDemoSliderEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoSliderEnComponent },
  { path: 'zh', component: NzDemoSliderZhComponent }
];

export default routes;
