import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoWatermarkBasicComponent } from './basic';
import { NzDemoWatermarkCustomComponent } from './custom';
import { NzDemoWatermarkImageComponent } from './image';
import { NzDemoWatermarkMultiLineComponent } from './multi-line';


@Component({
  selector     : 'nz-demo-watermark',
  imports      : [ShareModule, NzDemoWatermarkBasicComponent, NzDemoWatermarkCustomComponent, NzDemoWatermarkImageComponent, NzDemoWatermarkMultiLineComponent],
  templateUrl  : './en.html'
})
export default class NzDemoWatermarkEnComponent {
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
