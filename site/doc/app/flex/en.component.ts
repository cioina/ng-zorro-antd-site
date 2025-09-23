import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoFlexAlignComponent } from './align';
import { NzDemoFlexBasicComponent } from './basic';
import { NzDemoFlexCombinationComponent } from './combination';
import { NzDemoFlexGapComponent } from './gap';
import { NzDemoFlexWrapComponent } from './wrap';


@Component({
  selector     : 'nz-demo-flex',
  imports      : [ShareModule, NzDemoFlexAlignComponent, NzDemoFlexBasicComponent, NzDemoFlexCombinationComponent, NzDemoFlexGapComponent, NzDemoFlexWrapComponent],
  templateUrl  : './en.html'
})
export class NzDemoFlexEnComponent {
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
