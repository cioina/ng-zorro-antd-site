import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoListBasicComponent } from './basic';
import { NzDemoListGridComponent } from './grid';
import { NzDemoListInfiniteLoadComponent } from './infinite-load';
import { NzDemoListLoadmoreComponent } from './loadmore';
import { NzDemoListResponsiveComponent } from './responsive';
import { NzDemoListSimpleComponent } from './simple';
import { NzDemoListVerticalComponent } from './vertical';


@Component({
  selector     : 'nz-demo-list',
  standalone   : true,
  imports      : [
    ShareModule,
		NzDemoListBasicComponent,
		NzDemoListGridComponent,
		NzDemoListInfiniteLoadComponent,
		NzDemoListLoadmoreComponent,
		NzDemoListResponsiveComponent,
		NzDemoListSimpleComponent,
		NzDemoListVerticalComponent,

  ],
  templateUrl  : './zh.html'
})
export class NzDemoListZhComponent {
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
