import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoButtonBasicComponent } from './basic';
import { NzDemoButtonBlockComponent } from './block';
import { NzDemoButtonDangerComponent } from './danger';
import { NzDemoButtonDisabledComponent } from './disabled';
import { NzDemoButtonGhostComponent } from './ghost';
import { NzDemoButtonIconComponent } from './icon';
import { NzDemoButtonLoadingComponent } from './loading';
import { NzDemoButtonMultipleComponent } from './multiple';
import { NzDemoButtonSizeComponent } from './size';


@Component({
  selector     : 'nz-demo-button',
  standalone   : true,
  imports      : [
    ShareModule,
		NzDemoButtonBasicComponent,
		NzDemoButtonBlockComponent,
		NzDemoButtonDangerComponent,
		NzDemoButtonDisabledComponent,
		NzDemoButtonGhostComponent,
		NzDemoButtonIconComponent,
		NzDemoButtonLoadingComponent,
		NzDemoButtonMultipleComponent,
		NzDemoButtonSizeComponent,

  ],
  templateUrl  : './en.html'
})
export class NzDemoButtonEnComponent {
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
