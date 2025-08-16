import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoSplitterBasicComponent } from './basic';
import { NzDemoSplitterCollapsibleComponent } from './collapsible';
import { NzDemoSplitterComplexComponent } from './complex';
import { NzDemoSplitterControlComponent } from './control';
import { NzDemoSplitterLazyComponent } from './lazy';
import { NzDemoSplitterMultipleComponent } from './multiple';
import { NzDemoSplitterVerticalComponent } from './vertical';


@Component({
  selector     : 'nz-demo-splitter',
  standalone   : true,
  imports      : [
    ShareModule,
		NzDemoSplitterBasicComponent,
		NzDemoSplitterCollapsibleComponent,
		NzDemoSplitterComplexComponent,
		NzDemoSplitterControlComponent,
		NzDemoSplitterLazyComponent,
		NzDemoSplitterMultipleComponent,
		NzDemoSplitterVerticalComponent,

  ],
  templateUrl  : './en.html'
})
export class NzDemoSplitterEnComponent {
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
