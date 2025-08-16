import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoDrawerBasicRightComponent } from './basic-right';
import { NzDemoDrawerFromDrawerComponent } from './from-drawer';
import { NzDemoDrawerMultiLevelDrawerComponent } from './multi-level-drawer';
import { NzDemoDrawerPlacementComponent } from './placement';
import { NzDemoDrawerServiceComponent } from './service';
import { NzDemoDrawerSizeComponent } from './size';
import { NzDemoDrawerUserProfileComponent } from './user-profile';


@Component({
  selector     : 'nz-demo-drawer',
  standalone   : true,
  imports      : [
    ShareModule,
		NzDemoDrawerBasicRightComponent,
		NzDemoDrawerFromDrawerComponent,
		NzDemoDrawerMultiLevelDrawerComponent,
		NzDemoDrawerPlacementComponent,
		NzDemoDrawerServiceComponent,
		NzDemoDrawerSizeComponent,
		NzDemoDrawerUserProfileComponent,

  ],
  templateUrl  : './zh.html'
})
export class NzDemoDrawerZhComponent {
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
