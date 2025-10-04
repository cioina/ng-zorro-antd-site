import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-customize-theme-zh',
  imports      : [ShareModule],
  templateUrl  : './customize-theme-zh.html'
})
export class NzDocCustomizeThemeZhComponent {
  goLink(link: string): void {
    if (window) {
      window.location.hash = link;
    }
  }
}
