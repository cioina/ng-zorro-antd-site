import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoAvatarBadgeComponent } from './badge';
import { NzDemoAvatarBasicComponent } from './basic';
import { NzDemoAvatarDynamicComponent } from './dynamic';
import { NzDemoAvatarGroupComponent } from './group';
import { NzDemoAvatarTypeComponent } from './type';


@Component({
  selector     : 'nz-demo-avatar',
  imports      : [ShareModule, NzDemoAvatarBadgeComponent, NzDemoAvatarBasicComponent, NzDemoAvatarDynamicComponent, NzDemoAvatarGroupComponent, NzDemoAvatarTypeComponent],
  templateUrl  : './en.html'
})
export class NzDemoAvatarEnComponent {
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
