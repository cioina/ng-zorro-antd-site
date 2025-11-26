import { Routes } from '@angular/router';

import { NzDocAnimationsEnComponent } from './animations-en';
import { NzDocAnimationsZhComponent } from './animations-zh';
import { NzDocChangelogEnComponent } from './changelog-en';
import { NzDocChangelogZhComponent } from './changelog-zh';
import { NzDocContributingEnComponent } from './contributing-en';
import { NzDocContributingZhComponent } from './contributing-zh';
import { NzDocCustomizeThemeVariableEnComponent } from './customize-theme-variable-en';
import { NzDocCustomizeThemeVariableZhComponent } from './customize-theme-variable-zh';
import { NzDocCustomizeThemeEnComponent } from './customize-theme-en';
import { NzDocCustomizeThemeZhComponent } from './customize-theme-zh';
import { NzDocDirectionEnComponent } from './direction-en';
import { NzDocDirectionZhComponent } from './direction-zh';
import { NzDocFaqEnComponent } from './faq-en';
import { NzDocFaqZhComponent } from './faq-zh';
import { NzDocGettingStartedEnComponent } from './getting-started-en';
import { NzDocGettingStartedZhComponent } from './getting-started-zh';
import { NzDocGlobalConfigEnComponent } from './global-config-en';
import { NzDocGlobalConfigZhComponent } from './global-config-zh';
import { NzDocI18NEnComponent } from './i18n-en';
import { NzDocI18NZhComponent } from './i18n-zh';
import { NzDocIntroduceEnComponent } from './introduce-en';
import { NzDocIntroduceZhComponent } from './introduce-zh';
import { NzDocJoinEnComponent } from './join-en';
import { NzDocJoinZhComponent } from './join-zh';
import { NzDocMigrationV21EnComponent } from './migration-v21-en';
import { NzDocMigrationV21ZhComponent } from './migration-v21-zh';
import { NzDocRecommendationEnComponent } from './recommendation-en';
import { NzDocRecommendationZhComponent } from './recommendation-zh';
import { NzDocSchematicsEnComponent } from './schematics-en';
import { NzDocSchematicsZhComponent } from './schematics-zh';


const routes: Routes = [
	{ path: 'animations/zh', component: NzDocAnimationsZhComponent },
	{ path: 'animations/en', component: NzDocAnimationsEnComponent },
	{ path: 'changelog/zh', component: NzDocChangelogZhComponent },
	{ path: 'changelog/en', component: NzDocChangelogEnComponent },
	{ path: 'contributing/zh', component: NzDocContributingZhComponent },
	{ path: 'contributing/en', component: NzDocContributingEnComponent },
	{ path: 'customize-theme-variable/zh', component: NzDocCustomizeThemeVariableZhComponent },
	{ path: 'customize-theme-variable/en', component: NzDocCustomizeThemeVariableEnComponent },
	{ path: 'customize-theme/zh', component: NzDocCustomizeThemeZhComponent },
	{ path: 'customize-theme/en', component: NzDocCustomizeThemeEnComponent },
	{ path: 'direction/zh', component: NzDocDirectionZhComponent },
	{ path: 'direction/en', component: NzDocDirectionEnComponent },
	{ path: 'faq/zh', component: NzDocFaqZhComponent },
	{ path: 'faq/en', component: NzDocFaqEnComponent },
	{ path: 'getting-started/zh', component: NzDocGettingStartedZhComponent },
	{ path: 'getting-started/en', component: NzDocGettingStartedEnComponent },
	{ path: 'global-config/zh', component: NzDocGlobalConfigZhComponent },
	{ path: 'global-config/en', component: NzDocGlobalConfigEnComponent },
	{ path: 'i18n/zh', component: NzDocI18NZhComponent },
	{ path: 'i18n/en', component: NzDocI18NEnComponent },
	{ path: 'introduce/zh', component: NzDocIntroduceZhComponent },
	{ path: 'introduce/en', component: NzDocIntroduceEnComponent },
	{ path: 'join/zh', component: NzDocJoinZhComponent },
	{ path: 'join/en', component: NzDocJoinEnComponent },
	{ path: 'migration-v21/zh', component: NzDocMigrationV21ZhComponent },
	{ path: 'migration-v21/en', component: NzDocMigrationV21EnComponent },
	{ path: 'recommendation/zh', component: NzDocRecommendationZhComponent },
	{ path: 'recommendation/en', component: NzDocRecommendationEnComponent },
	{ path: 'schematics/zh', component: NzDocSchematicsZhComponent },
	{ path: 'schematics/en', component: NzDocSchematicsEnComponent },

];

export default routes;
