import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoNotificationBasicComponent } from './basic';
import { NzDemoNotificationCustomIconComponent } from './custom-icon';
import { NzDemoNotificationCustomStyleComponent } from './custom-style';
import { NzDemoNotificationDurationComponent } from './duration';
import { NzDemoNotificationPlacementComponent } from './placement';
import { NzDemoNotificationTemplateComponent } from './template';
import { NzDemoNotificationUpdateComponent } from './update';
import { NzDemoNotificationWithBtnComponent } from './with-btn';
import { NzDemoNotificationWithIconComponent } from './with-icon';


@Component({
  selector     : 'nz-demo-notification',
  imports      : [ShareModule, NzDemoNotificationBasicComponent, NzDemoNotificationCustomIconComponent, NzDemoNotificationCustomStyleComponent, NzDemoNotificationDurationComponent, NzDemoNotificationPlacementComponent, NzDemoNotificationTemplateComponent, NzDemoNotificationUpdateComponent, NzDemoNotificationWithBtnComponent, NzDemoNotificationWithIconComponent],
  templateUrl  : './en.html'
})
export default class NzDemoNotificationEnComponent {
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
