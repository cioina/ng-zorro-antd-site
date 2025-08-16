import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoSpaceAlignComponent } from './align';
import { NzDemoSpaceBasicComponent } from './basic';
import { NzDemoSpaceCompactButtonVerticalComponent } from './compact-button-vertical';
import { NzDemoSpaceCompactButtonsComponent } from './compact-buttons';
import { NzDemoSpaceCompactComponent } from './compact';
import { NzDemoSpaceCustomizeComponent } from './customize';
import { NzDemoSpaceSizeComponent } from './size';
import { NzDemoSpaceSplitComponent } from './split';
import { NzDemoSpaceVerticalComponent } from './vertical';
import { NzDemoSpaceWrapComponent } from './wrap';


@Component({
  selector     : 'nz-demo-space',
  standalone   : true,
  imports      : [
    ShareModule,
		NzDemoSpaceAlignComponent,
		NzDemoSpaceBasicComponent,
		NzDemoSpaceCompactButtonVerticalComponent,
		NzDemoSpaceCompactButtonsComponent,
		NzDemoSpaceCompactComponent,
		NzDemoSpaceCustomizeComponent,
		NzDemoSpaceSizeComponent,
		NzDemoSpaceSplitComponent,
		NzDemoSpaceVerticalComponent,
		NzDemoSpaceWrapComponent,

  ],
  templateUrl  : './en.html'
})
export class NzDemoSpaceEnComponent {
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
