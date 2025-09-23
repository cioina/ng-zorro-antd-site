import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoCheckListBasicComponent } from './basic';
import { NzDemoCheckListCustomComponent } from './custom';


@Component({
  selector     : 'nz-demo-check-list',
  imports      : [ShareModule, NzDemoCheckListBasicComponent, NzDemoCheckListCustomComponent],
  templateUrl  : './zh.html'
})
export class NzDemoCheckListZhComponent {
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
