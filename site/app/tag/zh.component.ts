import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoTagBasicComponent } from './basic';
import { NzDemoTagBorderlessComponent } from './borderless';
import { NzDemoTagCheckableComponent } from './checkable';
import { NzDemoTagColorfulComponent } from './colorful';
import { NzDemoTagControlComponent } from './control';
import { NzDemoTagHotTagsComponent } from './hot-tags';
import { NzDemoTagIconComponent } from './icon';
import { NzDemoTagStatusComponent } from './status';


@Component({
  selector     : 'nz-demo-tag',
  imports      : [ShareModule, NzDemoTagBasicComponent, NzDemoTagBorderlessComponent, NzDemoTagCheckableComponent, NzDemoTagColorfulComponent, NzDemoTagControlComponent, NzDemoTagHotTagsComponent, NzDemoTagIconComponent, NzDemoTagStatusComponent],
  templateUrl  : './zh.html'
})
export class NzDemoTagZhComponent {
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
