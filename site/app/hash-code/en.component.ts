import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoHashCodeBasicComponent } from './basic';
import { NzDemoHashCodeCopyComponent } from './copy';
import { NzDemoHashCodeLogoComponent } from './logo';
import { NzDemoHashCodePrimaryComponent } from './primary';
import { NzDemoHashCodeRectComponent } from './rect';
import { NzDemoHashCodeSingleComponent } from './single';
import { NzDemoHashCodeStripComponent } from './strip';


@Component({
  selector     : 'nz-demo-hash-code',
  imports      : [ShareModule, NzDemoHashCodeBasicComponent, NzDemoHashCodeCopyComponent, NzDemoHashCodeLogoComponent, NzDemoHashCodePrimaryComponent, NzDemoHashCodeRectComponent, NzDemoHashCodeSingleComponent, NzDemoHashCodeStripComponent],
  templateUrl  : './en.html'
})
export default class NzDemoHashCodeEnComponent {
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
