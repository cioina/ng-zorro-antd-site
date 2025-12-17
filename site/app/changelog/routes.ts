import { Routes } from '@angular/router';

const routes: Routes = [
	{ path: 'zh', loadComponent: () => import('./changelog-zh') },
	{ path: 'en', loadComponent: () => import('./changelog-en') },

];

export default routes;
