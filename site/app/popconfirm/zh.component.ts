import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoPopconfirmAsyncComponent } from './async';
import { NzDemoPopconfirmBasicComponent } from './basic';
import { NzDemoPopconfirmCustomIconComponent } from './custom-icon';
import { NzDemoPopconfirmDynamicTriggerComponent } from './dynamic-trigger';
import { NzDemoPopconfirmHideArrowComponent } from './hide-arrow';
import { NzDemoPopconfirmLocaleComponent } from './locale';
import { NzDemoPopconfirmPlacementComponent } from './placement';
import { NzDemoPopconfirmPromiseComponent } from './promise';


@Component({
  selector     : 'nz-demo-popconfirm',
  imports      : [ShareModule, NzDemoPopconfirmAsyncComponent, NzDemoPopconfirmBasicComponent, NzDemoPopconfirmCustomIconComponent, NzDemoPopconfirmDynamicTriggerComponent, NzDemoPopconfirmHideArrowComponent, NzDemoPopconfirmLocaleComponent, NzDemoPopconfirmPlacementComponent, NzDemoPopconfirmPromiseComponent],
  templateUrl  : './zh.html'
})
export default class NzDemoPopconfirmZhComponent {
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
