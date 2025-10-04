import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoPaginationAlignComponent } from './align';
import { NzDemoPaginationBasicComponent } from './basic';
import { NzDemoPaginationChangerComponent } from './changer';
import { NzDemoPaginationControlledComponent } from './controlled';
import { NzDemoPaginationItemRenderComponent } from './item-render';
import { NzDemoPaginationJumpComponent } from './jump';
import { NzDemoPaginationMiniComponent } from './mini';
import { NzDemoPaginationMoreComponent } from './more';
import { NzDemoPaginationSimpleComponent } from './simple';
import { NzDemoPaginationTotalComponent } from './total';


@Component({
  selector     : 'nz-demo-pagination',
  imports      : [ShareModule, NzDemoPaginationAlignComponent, NzDemoPaginationBasicComponent, NzDemoPaginationChangerComponent, NzDemoPaginationControlledComponent, NzDemoPaginationItemRenderComponent, NzDemoPaginationJumpComponent, NzDemoPaginationMiniComponent, NzDemoPaginationMoreComponent, NzDemoPaginationSimpleComponent, NzDemoPaginationTotalComponent],
  templateUrl  : './zh.html'
})
export class NzDemoPaginationZhComponent {
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
