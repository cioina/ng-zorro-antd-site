import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoSelectAutomaticTokenizationComponent } from './automatic-tokenization';
import { NzDemoSelectBasicComponent } from './basic';
import { NzDemoSelectBigDataComponent } from './big-data';
import { NzDemoSelectCoordinateComponent } from './coordinate';
import { NzDemoSelectCustomContentComponent } from './custom-content';
import { NzDemoSelectCustomDropdownMenuComponent } from './custom-dropdown-menu';
import { NzDemoSelectCustomTemplateComponent } from './custom-template';
import { NzDemoSelectDefaultValueComponent } from './default-value';
import { NzDemoSelectHideSelectedComponent } from './hide-selected';
import { NzDemoSelectLabelInValueComponent } from './label-in-value';
import { NzDemoSelectMaxCountComponent } from './max-count';
import { NzDemoSelectMultipleComponent } from './multiple';
import { NzDemoSelectOptgroupComponent } from './optgroup';
import { NzDemoSelectOptionsComponent } from './options';
import { NzDemoSelectPlacementComponent } from './placement';
import { NzDemoSelectScrollLoadComponent } from './scroll-load';
import { NzDemoSelectSearchBoxComponent } from './search-box';
import { NzDemoSelectSearchComponent } from './search';
import { NzDemoSelectSelectUsersComponent } from './select-users';
import { NzDemoSelectSizeComponent } from './size';
import { NzDemoSelectStatusComponent } from './status';
import { NzDemoSelectTagsComponent } from './tags';
import { NzDemoSelectVariantComponent } from './variant';


@Component({
  selector     : 'nz-demo-select',
  standalone   : true,
  imports      : [
    ShareModule,
		NzDemoSelectAutomaticTokenizationComponent,
		NzDemoSelectBasicComponent,
		NzDemoSelectBigDataComponent,
		NzDemoSelectCoordinateComponent,
		NzDemoSelectCustomContentComponent,
		NzDemoSelectCustomDropdownMenuComponent,
		NzDemoSelectCustomTemplateComponent,
		NzDemoSelectDefaultValueComponent,
		NzDemoSelectHideSelectedComponent,
		NzDemoSelectLabelInValueComponent,
		NzDemoSelectMaxCountComponent,
		NzDemoSelectMultipleComponent,
		NzDemoSelectOptgroupComponent,
		NzDemoSelectOptionsComponent,
		NzDemoSelectPlacementComponent,
		NzDemoSelectScrollLoadComponent,
		NzDemoSelectSearchBoxComponent,
		NzDemoSelectSearchComponent,
		NzDemoSelectSelectUsersComponent,
		NzDemoSelectSizeComponent,
		NzDemoSelectStatusComponent,
		NzDemoSelectTagsComponent,
		NzDemoSelectVariantComponent,

  ],
  templateUrl  : './en.html'
})
export class NzDemoSelectEnComponent {
  expanded = false;
  @ViewChildren(NzCodeBoxComponent) codeBoxes!: QueryList<NzCodeBoxComponent>;

  goLink(link: string): void {
    if (window) {
      window.location.hash = link;
    }
  }

  expandAllCode(): void {
    this.expanded = !this.expanded;
    this.codeBoxes.forEach(code => code.expandCode(this.expanded));
  }
}
