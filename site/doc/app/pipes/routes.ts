import { Routes } from '@angular/router';

import { NzDemoPipesZhComponent } from './zh.component';
import { NzDemoPipesEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoPipesEnComponent },
  { path: 'zh', component: NzDemoPipesZhComponent }
];

export default routes;
