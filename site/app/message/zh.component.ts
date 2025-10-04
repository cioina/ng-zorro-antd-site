import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoMessageCloseComponent } from './close';
import { NzDemoMessageCustomStyleComponent } from './custom-style';
import { NzDemoMessageDurationComponent } from './duration';
import { NzDemoMessageInfoComponent } from './info';
import { NzDemoMessageLoadingComponent } from './loading';
import { NzDemoMessageOtherComponent } from './other';
import { NzDemoMessageTemplateComponent } from './template';


@Component({
  selector     : 'nz-demo-message',
  imports      : [ShareModule, NzDemoMessageCloseComponent, NzDemoMessageCustomStyleComponent, NzDemoMessageDurationComponent, NzDemoMessageInfoComponent, NzDemoMessageLoadingComponent, NzDemoMessageOtherComponent, NzDemoMessageTemplateComponent],
  templateUrl  : './zh.html'
})
export class NzDemoMessageZhComponent {
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
