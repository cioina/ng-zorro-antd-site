import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-customize-theme-en',
  standalone   : true,
  imports      : [ShareModule],
  templateUrl  : './customize-theme-en.html'
})
export class NzDocCustomizeThemeEnComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
