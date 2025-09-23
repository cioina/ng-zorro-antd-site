import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoGridBasicComponent } from './basic';
import { NzDemoGridFlexAlignComponent } from './flex-align';
import { NzDemoGridFlexOrderComponent } from './flex-order';
import { NzDemoGridFlexStretchComponent } from './flex-stretch';
import { NzDemoGridFlexComponent } from './flex';
import { NzDemoGridGutterComponent } from './gutter';
import { NzDemoGridOffsetComponent } from './offset';
import { NzDemoGridPlaygroundComponent } from './playground';
import { NzDemoGridResponsiveMoreComponent } from './responsive-more';
import { NzDemoGridResponsiveComponent } from './responsive';
import { NzDemoGridSortComponent } from './sort';


@Component({
  selector     : 'nz-demo-grid',
  imports      : [ShareModule, NzDemoGridBasicComponent, NzDemoGridFlexAlignComponent, NzDemoGridFlexOrderComponent, NzDemoGridFlexStretchComponent, NzDemoGridFlexComponent, NzDemoGridGutterComponent, NzDemoGridOffsetComponent, NzDemoGridPlaygroundComponent, NzDemoGridResponsiveMoreComponent, NzDemoGridResponsiveComponent, NzDemoGridSortComponent],
  templateUrl  : './zh.html'
})
export class NzDemoGridZhComponent {
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
