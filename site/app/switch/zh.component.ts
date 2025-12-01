import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoSwitchBasicComponent } from './basic';
import { NzDemoSwitchControlComponent } from './control';
import { NzDemoSwitchDisabledComponent } from './disabled';
import { NzDemoSwitchLoadingComponent } from './loading';
import { NzDemoSwitchSizeComponent } from './size';
import { NzDemoSwitchTextComponent } from './text';


@Component({
  selector     : 'nz-demo-switch',
  imports      : [ShareModule, NzDemoSwitchBasicComponent, NzDemoSwitchControlComponent, NzDemoSwitchDisabledComponent, NzDemoSwitchLoadingComponent, NzDemoSwitchSizeComponent, NzDemoSwitchTextComponent],
  templateUrl  : './zh.html'
})
export default class NzDemoSwitchZhComponent {
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
