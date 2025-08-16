import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoPageHeaderActionsComponent } from './actions';
import { NzDemoPageHeaderBasicComponent } from './basic';
import { NzDemoPageHeaderBreadcrumbComponent } from './breadcrumb';
import { NzDemoPageHeaderContentComponent } from './content';
import { NzDemoPageHeaderGhostComponent } from './ghost';
import { NzDemoPageHeaderResponsiveComponent } from './responsive';


@Component({
  selector     : 'nz-demo-page-header',
  standalone   : true,
  imports      : [
    ShareModule,
		NzDemoPageHeaderActionsComponent,
		NzDemoPageHeaderBasicComponent,
		NzDemoPageHeaderBreadcrumbComponent,
		NzDemoPageHeaderContentComponent,
		NzDemoPageHeaderGhostComponent,
		NzDemoPageHeaderResponsiveComponent,

  ],
  templateUrl  : './zh.html'
})
export class NzDemoPageHeaderZhComponent {
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
