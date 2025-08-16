import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoAlertActionComponent } from './action';
import { NzDemoAlertBannerComponent } from './banner';
import { NzDemoAlertBasicComponent } from './basic';
import { NzDemoAlertClosableComponent } from './closable';
import { NzDemoAlertCloseTextComponent } from './close-text';
import { NzDemoAlertCustomIconComponent } from './custom-icon';
import { NzDemoAlertDescriptionComponent } from './description';
import { NzDemoAlertIconComponent } from './icon';
import { NzDemoAlertStyleComponent } from './style';


@Component({
  selector     : 'nz-demo-alert',
  standalone   : true,
  imports      : [
    ShareModule,
		NzDemoAlertActionComponent,
		NzDemoAlertBannerComponent,
		NzDemoAlertBasicComponent,
		NzDemoAlertClosableComponent,
		NzDemoAlertCloseTextComponent,
		NzDemoAlertCustomIconComponent,
		NzDemoAlertDescriptionComponent,
		NzDemoAlertIconComponent,
		NzDemoAlertStyleComponent,

  ],
  templateUrl  : './zh.html'
})
export class NzDemoAlertZhComponent {
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
