import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoTransferAdvancedComponent } from './advanced';
import { NzDemoTransferBasicComponent } from './basic';
import { NzDemoTransferCustomItemComponent } from './custom-item';
import { NzDemoTransferOneWayComponent } from './one-way';
import { NzDemoTransferSearchComponent } from './search';
import { NzDemoTransferStatusComponent } from './status';
import { NzDemoTransferTableTransferComponent } from './table-transfer';
import { NzDemoTransferTreeTransferComponent } from './tree-transfer';


@Component({
  selector     : 'nz-demo-transfer',
  imports      : [ShareModule, NzDemoTransferAdvancedComponent, NzDemoTransferBasicComponent, NzDemoTransferCustomItemComponent, NzDemoTransferOneWayComponent, NzDemoTransferSearchComponent, NzDemoTransferStatusComponent, NzDemoTransferTableTransferComponent, NzDemoTransferTreeTransferComponent],
  templateUrl  : './en.html'
})
export class NzDemoTransferEnComponent {
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
