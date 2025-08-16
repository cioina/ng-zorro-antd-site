import { Routes } from '@angular/router';

import { NzDemoCarouselZhComponent } from './zh.component';
import { NzDemoCarouselEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoCarouselEnComponent },
  { path: 'zh', component: NzDemoCarouselZhComponent }
];

export default routes;
