import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoEmptyBasicComponent } from './basic';
import { NzDemoEmptyConfigComponent } from './config';
import { NzDemoEmptyCustomizeComponent } from './customize';
import { NzDemoEmptyDescriptionComponent } from './description';
import { NzDemoEmptySimpleComponent } from './simple';


@Component({
  selector     : 'nz-demo-empty',
  imports      : [ShareModule, NzDemoEmptyBasicComponent, NzDemoEmptyConfigComponent, NzDemoEmptyCustomizeComponent, NzDemoEmptyDescriptionComponent, NzDemoEmptySimpleComponent],
  templateUrl  : './en.html'
})
export class NzDemoEmptyEnComponent {
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
