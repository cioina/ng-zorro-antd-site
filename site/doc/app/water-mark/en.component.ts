import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoWaterMarkBasicComponent } from './basic';
import { NzDemoWaterMarkCustomComponent } from './custom';
import { NzDemoWaterMarkImageComponent } from './image';
import { NzDemoWaterMarkMultiLineComponent } from './multi-line';


@Component({
  selector     : 'nz-demo-water-mark',
  standalone   : true,
  imports      : [
    ShareModule,
		NzDemoWaterMarkBasicComponent,
		NzDemoWaterMarkCustomComponent,
		NzDemoWaterMarkImageComponent,
		NzDemoWaterMarkMultiLineComponent,

  ],
  templateUrl  : './en.html'
})
export class NzDemoWaterMarkEnComponent {
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
