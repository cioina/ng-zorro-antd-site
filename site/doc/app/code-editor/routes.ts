import { Routes } from '@angular/router';

import { NzDemoCodeEditorZhComponent } from './zh.component';
import { NzDemoCodeEditorEnComponent } from './en.component';

const routes: Routes = [
  { path: 'en', component: NzDemoCodeEditorEnComponent },
  { path: 'zh', component: NzDemoCodeEditorZhComponent }
];

export default routes;
