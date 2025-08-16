import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-customize-theme-zh',
  standalone   : true,
  imports      : [ShareModule],
  templateUrl  : './customize-theme-zh.html'
})
export class NzDocCustomizeThemeZhComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
