import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoIconBasicComponent } from './basic';
import { NzDemoIconCustomComponent } from './custom';
import { NzDemoIconIconfontComponent } from './iconfont';
import { NzDemoIconNamespaceComponent } from './namespace';
import { NzDemoIconTwotoneComponent } from './twotone';
import { NzPageDemoIconZhComponent } from './zh.page.component';


@Component({
  selector     : 'nz-demo-icon',
  imports      : [ShareModule, NzDemoIconBasicComponent, NzDemoIconCustomComponent, NzDemoIconIconfontComponent, NzDemoIconNamespaceComponent, NzDemoIconTwotoneComponent, NzPageDemoIconZhComponent],
  templateUrl  : './zh.html'
})
export class NzDemoIconZhComponent {
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
