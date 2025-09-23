import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoTooltipArrowPointAtCenterComponent } from './arrow-point-at-center';
import { NzDemoTooltipBasicComponent } from './basic';
import { NzDemoTooltipColorComponent } from './color';
import { NzDemoTooltipOriginComponent } from './origin';
import { NzDemoTooltipPlacementComponent } from './placement';
import { NzDemoTooltipTemplateComponent } from './template';


@Component({
  selector     : 'nz-demo-tooltip',
  imports      : [ShareModule, NzDemoTooltipArrowPointAtCenterComponent, NzDemoTooltipBasicComponent, NzDemoTooltipColorComponent, NzDemoTooltipOriginComponent, NzDemoTooltipPlacementComponent, NzDemoTooltipTemplateComponent],
  templateUrl  : './en.html'
})
export class NzDemoTooltipEnComponent {
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
