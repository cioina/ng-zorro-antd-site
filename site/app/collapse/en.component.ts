import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoCollapseAccordionComponent } from './accordion';
import { NzDemoCollapseBasicComponent } from './basic';
import { NzDemoCollapseBorderlessComponent } from './borderless';
import { NzDemoCollapseCollapsibleComponent } from './collapsible';
import { NzDemoCollapseCustomComponent } from './custom';
import { NzDemoCollapseExtraComponent } from './extra';
import { NzDemoCollapseGhostComponent } from './ghost';
import { NzDemoCollapseMixComponent } from './mix';
import { NzDemoCollapseNoarrowComponent } from './noarrow';
import { NzDemoCollapseSizeComponent } from './size';


@Component({
  selector     : 'nz-demo-collapse',
  imports      : [ShareModule, NzDemoCollapseAccordionComponent, NzDemoCollapseBasicComponent, NzDemoCollapseBorderlessComponent, NzDemoCollapseCollapsibleComponent, NzDemoCollapseCustomComponent, NzDemoCollapseExtraComponent, NzDemoCollapseGhostComponent, NzDemoCollapseMixComponent, NzDemoCollapseNoarrowComponent, NzDemoCollapseSizeComponent],
  templateUrl  : './en.html'
})
export default class NzDemoCollapseEnComponent {
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
