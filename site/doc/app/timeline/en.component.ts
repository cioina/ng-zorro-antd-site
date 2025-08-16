import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoTimelineAlternateComponent } from './alternate';
import { NzDemoTimelineBasicComponent } from './basic';
import { NzDemoTimelineColorComponent } from './color';
import { NzDemoTimelineCustomComponent } from './custom';
import { NzDemoTimelineLabelComponent } from './label';
import { NzDemoTimelinePendingComponent } from './pending';
import { NzDemoTimelinePositionComponent } from './position';
import { NzDemoTimelineRightComponent } from './right';


@Component({
  selector     : 'nz-demo-timeline',
  standalone   : true,
  imports      : [
    ShareModule,
		NzDemoTimelineAlternateComponent,
		NzDemoTimelineBasicComponent,
		NzDemoTimelineColorComponent,
		NzDemoTimelineCustomComponent,
		NzDemoTimelineLabelComponent,
		NzDemoTimelinePendingComponent,
		NzDemoTimelinePositionComponent,
		NzDemoTimelineRightComponent,

  ],
  templateUrl  : './en.html'
})
export class NzDemoTimelineEnComponent {
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
