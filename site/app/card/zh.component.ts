import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoCardBasicComponent } from './basic';
import { NzDemoCardBorderLessComponent } from './border-less';
import { NzDemoCardFlexibleContentComponent } from './flexible-content';
import { NzDemoCardGridCardComponent } from './grid-card';
import { NzDemoCardInColumnComponent } from './in-column';
import { NzDemoCardInnerComponent } from './inner';
import { NzDemoCardLoadingComponent } from './loading';
import { NzDemoCardMetaComponent } from './meta';
import { NzDemoCardSimpleComponent } from './simple';
import { NzDemoCardTabsComponent } from './tabs';


@Component({
  selector     : 'nz-demo-card',
  imports      : [ShareModule, NzDemoCardBasicComponent, NzDemoCardBorderLessComponent, NzDemoCardFlexibleContentComponent, NzDemoCardGridCardComponent, NzDemoCardInColumnComponent, NzDemoCardInnerComponent, NzDemoCardLoadingComponent, NzDemoCardMetaComponent, NzDemoCardSimpleComponent, NzDemoCardTabsComponent],
  templateUrl  : './zh.html'
})
export default class NzDemoCardZhComponent {
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
