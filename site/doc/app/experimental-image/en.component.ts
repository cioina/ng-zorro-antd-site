import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoExperimentalImageAutoSrcsetComponent } from './auto-srcset';
import { NzDemoExperimentalImagePreloadingComponent } from './preloading';
import { NzDemoExperimentalImageSrcLoaderComponent } from './src-loader';


@Component({
  selector     : 'nz-demo-experimental-image',
  imports      : [ShareModule, NzDemoExperimentalImageAutoSrcsetComponent, NzDemoExperimentalImagePreloadingComponent, NzDemoExperimentalImageSrcLoaderComponent],
  templateUrl  : './en.html'
})
export class NzDemoExperimentalImageEnComponent {
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
