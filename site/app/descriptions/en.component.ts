import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoDescriptionsBasicComponent } from './basic';
import { NzDemoDescriptionsBorderComponent } from './border';
import { NzDemoDescriptionsCustomSizeComponent } from './custom-size';
import { NzDemoDescriptionsResponsiveComponent } from './responsive';
import { NzDemoDescriptionsVerticalBorderComponent } from './vertical-border';
import { NzDemoDescriptionsVerticalComponent } from './vertical';


@Component({
  selector     : 'nz-demo-descriptions',
  imports      : [ShareModule, NzDemoDescriptionsBasicComponent, NzDemoDescriptionsBorderComponent, NzDemoDescriptionsCustomSizeComponent, NzDemoDescriptionsResponsiveComponent, NzDemoDescriptionsVerticalBorderComponent, NzDemoDescriptionsVerticalComponent],
  templateUrl  : './en.html'
})
export default class NzDemoDescriptionsEnComponent {
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
