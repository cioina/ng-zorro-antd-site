import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoCarouselArrowComponent } from './arrow';
import { NzDemoCarouselAutoplayComponent } from './autoplay';
import { NzDemoCarouselBasicComponent } from './basic';
import { NzDemoCarouselCustomComponent } from './custom';
import { NzDemoCarouselFadeComponent } from './fade';
import { NzDemoCarouselLoopComponent } from './loop';
import { NzDemoCarouselPositionComponent } from './position';


@Component({
  selector     : 'nz-demo-carousel',
  imports      : [ShareModule, NzDemoCarouselArrowComponent, NzDemoCarouselAutoplayComponent, NzDemoCarouselBasicComponent, NzDemoCarouselCustomComponent, NzDemoCarouselFadeComponent, NzDemoCarouselLoopComponent, NzDemoCarouselPositionComponent],
  templateUrl  : './zh.html'
})
export class NzDemoCarouselZhComponent {
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
