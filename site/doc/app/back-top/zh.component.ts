import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoBackTopBasicComponent } from './basic';
import { NzDemoBackTopCustomComponent } from './custom';
import { NzDemoBackTopTargetComponent } from './target';


@Component({
  selector     : 'nz-demo-back-top',
  imports      : [ShareModule, NzDemoBackTopBasicComponent, NzDemoBackTopCustomComponent, NzDemoBackTopTargetComponent],
  templateUrl  : './zh.html'
})
export class NzDemoBackTopZhComponent {
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
