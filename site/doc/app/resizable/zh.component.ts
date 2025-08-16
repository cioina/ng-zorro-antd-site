import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoResizableBasicComponent } from './basic';
import { NzDemoResizableCustomizeComponent } from './customize';
import { NzDemoResizableDrawerComponent } from './drawer';
import { NzDemoResizableGridComponent } from './grid';
import { NzDemoResizableLayoutComponent } from './layout';
import { NzDemoResizableLockAspectRatioComponent } from './lock-aspect-ratio';
import { NzDemoResizablePreviewComponent } from './preview';
import { NzDemoResizableTableComponent } from './table';


@Component({
  selector     : 'nz-demo-resizable',
  standalone   : true,
  imports      : [
    ShareModule,
		NzDemoResizableBasicComponent,
		NzDemoResizableCustomizeComponent,
		NzDemoResizableDrawerComponent,
		NzDemoResizableGridComponent,
		NzDemoResizableLayoutComponent,
		NzDemoResizableLockAspectRatioComponent,
		NzDemoResizablePreviewComponent,
		NzDemoResizableTableComponent,

  ],
  templateUrl  : './zh.html'
})
export class NzDemoResizableZhComponent {
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
