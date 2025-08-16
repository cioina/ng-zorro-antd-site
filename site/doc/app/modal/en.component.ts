import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoModalAsyncComponent } from './async';
import { NzDemoModalBasicComponent } from './basic';
import { NzDemoModalConfirmPromiseComponent } from './confirm-promise';
import { NzDemoModalConfirmComponent } from './confirm';
import { NzDemoModalDraggableComponent } from './draggable';
import { NzDemoModalFooterComponent } from './footer';
import { NzDemoModalFooter2Component } from './footer2';
import { NzDemoModalInfoComponent } from './info';
import { NzDemoModalLocaleComponent } from './locale';
import { NzDemoModalManualComponent } from './manual';
import { NzDemoModalPositionComponent } from './position';
import { NzDemoModalServiceComponent } from './service';


@Component({
  selector     : 'nz-demo-modal',
  standalone   : true,
  imports      : [
    ShareModule,
		NzDemoModalAsyncComponent,
		NzDemoModalBasicComponent,
		NzDemoModalConfirmPromiseComponent,
		NzDemoModalConfirmComponent,
		NzDemoModalDraggableComponent,
		NzDemoModalFooterComponent,
		NzDemoModalFooter2Component,
		NzDemoModalInfoComponent,
		NzDemoModalLocaleComponent,
		NzDemoModalManualComponent,
		NzDemoModalPositionComponent,
		NzDemoModalServiceComponent,

  ],
  templateUrl  : './en.html'
})
export class NzDemoModalEnComponent {
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
