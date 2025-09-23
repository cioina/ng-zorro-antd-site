import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoBadgeBasicComponent } from './basic';
import { NzDemoBadgeColorfulComponent } from './colorful';
import { NzDemoBadgeDotComponent } from './dot';
import { NzDemoBadgeDynamicComponent } from './dynamic';
import { NzDemoBadgeLinkComponent } from './link';
import { NzDemoBadgeNoWrapperComponent } from './no-wrapper';
import { NzDemoBadgeOffsetComponent } from './offset';
import { NzDemoBadgeOverflowComponent } from './overflow';
import { NzDemoBadgeRibbonComponent } from './ribbon';
import { NzDemoBadgeSizeComponent } from './size';
import { NzDemoBadgeStatusComponent } from './status';


@Component({
  selector     : 'nz-demo-badge',
  imports      : [ShareModule, NzDemoBadgeBasicComponent, NzDemoBadgeColorfulComponent, NzDemoBadgeDotComponent, NzDemoBadgeDynamicComponent, NzDemoBadgeLinkComponent, NzDemoBadgeNoWrapperComponent, NzDemoBadgeOffsetComponent, NzDemoBadgeOverflowComponent, NzDemoBadgeRibbonComponent, NzDemoBadgeSizeComponent, NzDemoBadgeStatusComponent],
  templateUrl  : './zh.html'
})
export class NzDemoBadgeZhComponent {
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
