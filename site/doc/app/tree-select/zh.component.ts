import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoTreeSelectAsyncComponent } from './async';
import { NzDemoTreeSelectBasicComponent } from './basic';
import { NzDemoTreeSelectCheckableComponent } from './checkable';
import { NzDemoTreeSelectMultipleComponent } from './multiple';
import { NzDemoTreeSelectNoDataComponent } from './no-data';
import { NzDemoTreeSelectPlacementComponent } from './placement';
import { NzDemoTreeSelectStatusComponent } from './status';
import { NzDemoTreeSelectVariantComponent } from './variant';
import { NzDemoTreeSelectVirtualScrollComponent } from './virtual-scroll';


@Component({
  selector     : 'nz-demo-tree-select',
  standalone   : true,
  imports      : [
    ShareModule,
		NzDemoTreeSelectAsyncComponent,
		NzDemoTreeSelectBasicComponent,
		NzDemoTreeSelectCheckableComponent,
		NzDemoTreeSelectMultipleComponent,
		NzDemoTreeSelectNoDataComponent,
		NzDemoTreeSelectPlacementComponent,
		NzDemoTreeSelectStatusComponent,
		NzDemoTreeSelectVariantComponent,
		NzDemoTreeSelectVirtualScrollComponent,

  ],
  templateUrl  : './zh.html'
})
export class NzDemoTreeSelectZhComponent {
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
