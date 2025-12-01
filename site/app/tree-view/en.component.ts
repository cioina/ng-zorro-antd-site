import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoTreeViewBasicChildrenAccessorComponent } from './basic-children-accessor';
import { NzDemoTreeViewBasicLevelAccessorComponent } from './basic-level-accessor';
import { NzDemoTreeViewCheckboxComponent } from './checkbox';
import { NzDemoTreeViewDirectoryComponent } from './directory';
import { NzDemoTreeViewDynamicComponent } from './dynamic';
import { NzDemoTreeViewEditableComponent } from './editable';
import { NzDemoTreeViewLineComponent } from './line';
import { NzDemoTreeViewSearchComponent } from './search';
import { NzDemoTreeViewVirtualScrollComponent } from './virtual-scroll';


@Component({
  selector     : 'nz-demo-tree-view',
  imports      : [ShareModule, NzDemoTreeViewBasicChildrenAccessorComponent, NzDemoTreeViewBasicLevelAccessorComponent, NzDemoTreeViewCheckboxComponent, NzDemoTreeViewDirectoryComponent, NzDemoTreeViewDynamicComponent, NzDemoTreeViewEditableComponent, NzDemoTreeViewLineComponent, NzDemoTreeViewSearchComponent, NzDemoTreeViewVirtualScrollComponent],
  templateUrl  : './en.html'
})
export default class NzDemoTreeViewEnComponent {
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
