import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoSpinBasicComponent } from './basic';
import { NzDemoSpinCustomIndicatorComponent } from './custom-indicator';
import { NzDemoSpinDelayAndDebounceComponent } from './delay-and-debounce';
import { NzDemoSpinInsideComponent } from './inside';
import { NzDemoSpinNestedComponent } from './nested';
import { NzDemoSpinSizeComponent } from './size';
import { NzDemoSpinTipComponent } from './tip';


@Component({
  selector     : 'nz-demo-spin',
  imports      : [ShareModule, NzDemoSpinBasicComponent, NzDemoSpinCustomIndicatorComponent, NzDemoSpinDelayAndDebounceComponent, NzDemoSpinInsideComponent, NzDemoSpinNestedComponent, NzDemoSpinSizeComponent, NzDemoSpinTipComponent],
  templateUrl  : './en.html'
})
export class NzDemoSpinEnComponent {
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
