import { Routes } from '@angular/router';

const routes: Routes = [
	{ path: 'animations/zh', loadComponent: () => import('./animations-zh') },
	{ path: 'animations/en', loadComponent: () => import('./animations-en') },
	{ path: 'contributing/zh', loadComponent: () => import('./contributing-zh') },
	{ path: 'contributing/en', loadComponent: () => import('./contributing-en') },
	{ path: 'customize-theme-variable/zh', loadComponent: () => import('./customize-theme-variable-zh') },
	{ path: 'customize-theme-variable/en', loadComponent: () => import('./customize-theme-variable-en') },
	{ path: 'customize-theme/zh', loadComponent: () => import('./customize-theme-zh') },
	{ path: 'customize-theme/en', loadComponent: () => import('./customize-theme-en') },
	{ path: 'direction/zh', loadComponent: () => import('./direction-zh') },
	{ path: 'direction/en', loadComponent: () => import('./direction-en') },
	{ path: 'faq/zh', loadComponent: () => import('./faq-zh') },
	{ path: 'faq/en', loadComponent: () => import('./faq-en') },
	{ path: 'getting-started/zh', loadComponent: () => import('./getting-started-zh') },
	{ path: 'getting-started/en', loadComponent: () => import('./getting-started-en') },
	{ path: 'global-config/zh', loadComponent: () => import('./global-config-zh') },
	{ path: 'global-config/en', loadComponent: () => import('./global-config-en') },
	{ path: 'i18n/zh', loadComponent: () => import('./i18n-zh') },
	{ path: 'i18n/en', loadComponent: () => import('./i18n-en') },
	{ path: 'introduce/zh', loadComponent: () => import('./introduce-zh') },
	{ path: 'introduce/en', loadComponent: () => import('./introduce-en') },
	{ path: 'join/zh', loadComponent: () => import('./join-zh') },
	{ path: 'join/en', loadComponent: () => import('./join-en') },
	{ path: 'migration-v21/zh', loadComponent: () => import('./migration-v21-zh') },
	{ path: 'migration-v21/en', loadComponent: () => import('./migration-v21-en') },
	{ path: 'recommendation/zh', loadComponent: () => import('./recommendation-zh') },
	{ path: 'recommendation/en', loadComponent: () => import('./recommendation-en') },
	{ path: 'schematics/zh', loadComponent: () => import('./schematics-zh') },
	{ path: 'schematics/en', loadComponent: () => import('./schematics-en') },

];

export default routes;
