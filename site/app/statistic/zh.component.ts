import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoStatisticBasicComponent } from './basic';
import { NzDemoStatisticCardComponent } from './card';
import { NzDemoStatisticCountdownComponent } from './countdown';
import { NzDemoStatisticUnitComponent } from './unit';


@Component({
  selector     : 'nz-demo-statistic',
  imports      : [ShareModule, NzDemoStatisticBasicComponent, NzDemoStatisticCardComponent, NzDemoStatisticCountdownComponent, NzDemoStatisticUnitComponent],
  templateUrl  : './zh.html'
})
export class NzDemoStatisticZhComponent {
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
