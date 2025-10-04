import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoTypographyBasicComponent } from './basic';
import { NzDemoTypographyEllipsisComponent } from './ellipsis';
import { NzDemoTypographyInteractiveComponent } from './interactive';
import { NzDemoTypographySuffixComponent } from './suffix';
import { NzDemoTypographyTextComponent } from './text';
import { NzDemoTypographyTitleComponent } from './title';


@Component({
  selector     : 'nz-demo-typography',
  imports      : [ShareModule, NzDemoTypographyBasicComponent, NzDemoTypographyEllipsisComponent, NzDemoTypographyInteractiveComponent, NzDemoTypographySuffixComponent, NzDemoTypographyTextComponent, NzDemoTypographyTitleComponent],
  templateUrl  : './zh.html'
})
export class NzDemoTypographyZhComponent {
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
