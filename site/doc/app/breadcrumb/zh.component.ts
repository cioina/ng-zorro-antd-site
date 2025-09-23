import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoBreadcrumbAutoComponent } from './auto';
import { NzDemoBreadcrumbBasicComponent } from './basic';
import { NzDemoBreadcrumbDropdownComponent } from './dropdown';
import { NzDemoBreadcrumbRouterComponent } from './router';
import { NzDemoBreadcrumbSeparatorIndependentComponent } from './separator-independent';
import { NzDemoBreadcrumbSeparatorComponent } from './separator';
import { NzDemoBreadcrumbWithIconComponent } from './with-icon';


@Component({
  selector     : 'nz-demo-breadcrumb',
  imports      : [ShareModule, NzDemoBreadcrumbAutoComponent, NzDemoBreadcrumbBasicComponent, NzDemoBreadcrumbDropdownComponent, NzDemoBreadcrumbRouterComponent, NzDemoBreadcrumbSeparatorIndependentComponent, NzDemoBreadcrumbSeparatorComponent, NzDemoBreadcrumbWithIconComponent],
  templateUrl  : './zh.html'
})
export class NzDemoBreadcrumbZhComponent {
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
