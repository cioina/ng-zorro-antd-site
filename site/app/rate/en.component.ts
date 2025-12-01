import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoRateBasicComponent } from './basic';
import { NzDemoRateCharacterComponent } from './character';
import { NzDemoRateClearComponent } from './clear';
import { NzDemoRateCustomizeComponent } from './customize';
import { NzDemoRateDisabledComponent } from './disabled';
import { NzDemoRateHalfComponent } from './half';
import { NzDemoRateTextComponent } from './text';


@Component({
  selector     : 'nz-demo-rate',
  imports      : [ShareModule, NzDemoRateBasicComponent, NzDemoRateCharacterComponent, NzDemoRateClearComponent, NzDemoRateCustomizeComponent, NzDemoRateDisabledComponent, NzDemoRateHalfComponent, NzDemoRateTextComponent],
  templateUrl  : './en.html'
})
export default class NzDemoRateEnComponent {
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
