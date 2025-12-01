import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoDividerHorizontalComponent } from './horizontal';
import { NzDemoDividerOrientationComponent } from './orientation';
import { NzDemoDividerPlainComponent } from './plain';
import { NzDemoDividerSizeComponent } from './size';
import { NzDemoDividerVariantComponent } from './variant';
import { NzDemoDividerVerticalComponent } from './vertical';


@Component({
  selector     : 'nz-demo-divider',
  imports      : [ShareModule, NzDemoDividerHorizontalComponent, NzDemoDividerOrientationComponent, NzDemoDividerPlainComponent, NzDemoDividerSizeComponent, NzDemoDividerVariantComponent, NzDemoDividerVerticalComponent],
  templateUrl  : './en.html'
})
export default class NzDemoDividerEnComponent {
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
