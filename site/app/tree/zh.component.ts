import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoTreeBasicControlledComponent } from './basic-controlled';
import { NzDemoTreeBasicComponent } from './basic';
import { NzDemoTreeCustomizedIconComponent } from './customized-icon';
import { NzDemoTreeDirectoryComponent } from './directory';
import { NzDemoTreeDraggableConfirmComponent } from './draggable-confirm';
import { NzDemoTreeDraggableComponent } from './draggable';
import { NzDemoTreeDynamicComponent } from './dynamic';
import { NzDemoTreeLineComponent } from './line';
import { NzDemoTreeSearchComponent } from './search';
import { NzDemoTreeVirtualScrollComponent } from './virtual-scroll';


@Component({
  selector     : 'nz-demo-tree',
  imports      : [ShareModule, NzDemoTreeBasicControlledComponent, NzDemoTreeBasicComponent, NzDemoTreeCustomizedIconComponent, NzDemoTreeDirectoryComponent, NzDemoTreeDraggableConfirmComponent, NzDemoTreeDraggableComponent, NzDemoTreeDynamicComponent, NzDemoTreeLineComponent, NzDemoTreeSearchComponent, NzDemoTreeVirtualScrollComponent],
  templateUrl  : './zh.html'
})
export default class NzDemoTreeZhComponent {
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
