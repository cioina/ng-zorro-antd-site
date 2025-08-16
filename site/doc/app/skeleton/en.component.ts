import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoSkeletonActiveComponent } from './active';
import { NzDemoSkeletonBasicComponent } from './basic';
import { NzDemoSkeletonChildrenComponent } from './children';
import { NzDemoSkeletonComplexComponent } from './complex';
import { NzDemoSkeletonElementComponent } from './element';
import { NzDemoSkeletonListComponent } from './list';


@Component({
  selector     : 'nz-demo-skeleton',
  standalone   : true,
  imports      : [
    ShareModule,
		NzDemoSkeletonActiveComponent,
		NzDemoSkeletonBasicComponent,
		NzDemoSkeletonChildrenComponent,
		NzDemoSkeletonComplexComponent,
		NzDemoSkeletonElementComponent,
		NzDemoSkeletonListComponent,

  ],
  templateUrl  : './en.html'
})
export class NzDemoSkeletonEnComponent {
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
