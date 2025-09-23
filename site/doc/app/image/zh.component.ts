import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoImageBasicComponent } from './basic';
import { NzDemoImageControlledPreviewComponent } from './controlled-preview';
import { NzDemoImageFallbackComponent } from './fallback';
import { NzDemoImagePlaceholderComponent } from './placeholder';
import { NzDemoImagePreviewGroupComponent } from './preview-group';
import { NzDemoImageServiceComponent } from './service';


@Component({
  selector     : 'nz-demo-image',
  imports      : [ShareModule, NzDemoImageBasicComponent, NzDemoImageControlledPreviewComponent, NzDemoImageFallbackComponent, NzDemoImagePlaceholderComponent, NzDemoImagePreviewGroupComponent, NzDemoImageServiceComponent],
  templateUrl  : './zh.html'
})
export class NzDemoImageZhComponent {
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
