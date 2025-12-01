import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoLayoutBasicComponent } from './basic';
import { NzDemoLayoutCustomTriggerComponent } from './custom-trigger';
import { NzDemoLayoutFixedSiderComponent } from './fixed-sider';
import { NzDemoLayoutFixedComponent } from './fixed';
import { NzDemoLayoutResponsiveComponent } from './responsive';
import { NzDemoLayoutSideComponent } from './side';
import { NzDemoLayoutTopSide2Component } from './top-side-2';
import { NzDemoLayoutTopSideComponent } from './top-side';
import { NzDemoLayoutTopComponent } from './top';


@Component({
  selector     : 'nz-demo-layout',
  imports      : [ShareModule, NzDemoLayoutBasicComponent, NzDemoLayoutCustomTriggerComponent, NzDemoLayoutFixedSiderComponent, NzDemoLayoutFixedComponent, NzDemoLayoutResponsiveComponent, NzDemoLayoutSideComponent, NzDemoLayoutTopSide2Component, NzDemoLayoutTopSideComponent, NzDemoLayoutTopComponent],
  templateUrl  : './en.html'
})
export default class NzDemoLayoutEnComponent {
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
