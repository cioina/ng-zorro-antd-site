import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoDropdownArrowComponent } from './arrow';
import { NzDemoDropdownBasicComponent } from './basic';
import { NzDemoDropdownContextMenuComponent } from './context-menu';
import { NzDemoDropdownDropdownButtonComponent } from './dropdown-button';
import { NzDemoDropdownEventComponent } from './event';
import { NzDemoDropdownItemComponent } from './item';
import { NzDemoDropdownOverlayVisibleComponent } from './overlay-visible';
import { NzDemoDropdownPlacementComponent } from './placement';
import { NzDemoDropdownSubMenuComponent } from './sub-menu';
import { NzDemoDropdownTriggerComponent } from './trigger';


@Component({
  selector     : 'nz-demo-dropdown',
  imports      : [ShareModule, NzDemoDropdownArrowComponent, NzDemoDropdownBasicComponent, NzDemoDropdownContextMenuComponent, NzDemoDropdownDropdownButtonComponent, NzDemoDropdownEventComponent, NzDemoDropdownItemComponent, NzDemoDropdownOverlayVisibleComponent, NzDemoDropdownPlacementComponent, NzDemoDropdownSubMenuComponent, NzDemoDropdownTriggerComponent],
  templateUrl  : './en.html'
})
export default class NzDemoDropdownEnComponent {
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
