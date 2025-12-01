import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoPopoverArrowPointAtCenterComponent } from './arrow-point-at-center';
import { NzDemoPopoverBasicComponent } from './basic';
import { NzDemoPopoverControlComponent } from './control';
import { NzDemoPopoverOverlayComponent } from './overlay';
import { NzDemoPopoverPlacementComponent } from './placement';
import { NzDemoPopoverTemplateComponent } from './template';
import { NzDemoPopoverTriggerTypeComponent } from './trigger-type';


@Component({
  selector     : 'nz-demo-popover',
  imports      : [ShareModule, NzDemoPopoverArrowPointAtCenterComponent, NzDemoPopoverBasicComponent, NzDemoPopoverControlComponent, NzDemoPopoverOverlayComponent, NzDemoPopoverPlacementComponent, NzDemoPopoverTemplateComponent, NzDemoPopoverTriggerTypeComponent],
  templateUrl  : './zh.html'
})
export default class NzDemoPopoverZhComponent {
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
