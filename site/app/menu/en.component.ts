import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoMenuHorizontalPositionComponent } from './horizontal-position';
import { NzDemoMenuHorizontalComponent } from './horizontal';
import { NzDemoMenuInlineCollapsedComponent } from './inline-collapsed';
import { NzDemoMenuInlineComponent } from './inline';
import { NzDemoMenuRecursiveComponent } from './recursive';
import { NzDemoMenuRouterComponent } from './router';
import { NzDemoMenuSiderCurrentComponent } from './sider-current';
import { NzDemoMenuSwitchModeComponent } from './switch-mode';
import { NzDemoMenuThemeComponent } from './theme';
import { NzDemoMenuVerticalComponent } from './vertical';


@Component({
  selector     : 'nz-demo-menu',
  imports      : [ShareModule, NzDemoMenuHorizontalPositionComponent, NzDemoMenuHorizontalComponent, NzDemoMenuInlineCollapsedComponent, NzDemoMenuInlineComponent, NzDemoMenuRecursiveComponent, NzDemoMenuRouterComponent, NzDemoMenuSiderCurrentComponent, NzDemoMenuSwitchModeComponent, NzDemoMenuThemeComponent, NzDemoMenuVerticalComponent],
  templateUrl  : './en.html'
})
export default class NzDemoMenuEnComponent {
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
