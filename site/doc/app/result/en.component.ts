import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoResultCustomComponent } from './custom';
import { NzDemoResultErrorComponent } from './error';
import { NzDemoResultFofComponent } from './fof';
import { NzDemoResultFooComponent } from './foo';
import { NzDemoResultFotComponent } from './fot';
import { NzDemoResultInfoComponent } from './info';
import { NzDemoResultSuccessComponent } from './success';
import { NzDemoResultWarningComponent } from './warning';


@Component({
  selector     : 'nz-demo-result',
  imports      : [ShareModule, NzDemoResultCustomComponent, NzDemoResultErrorComponent, NzDemoResultFofComponent, NzDemoResultFooComponent, NzDemoResultFotComponent, NzDemoResultInfoComponent, NzDemoResultSuccessComponent, NzDemoResultWarningComponent],
  templateUrl  : './en.html'
})
export class NzDemoResultEnComponent {
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
