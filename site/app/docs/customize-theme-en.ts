import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-customize-theme-en',
  imports      : [ShareModule],
  templateUrl  : './customize-theme-en.html'
})
export default class NzDocCustomizeThemeEnComponent {
  goLink(link: string): void {
    if (window) {
      window.location.hash = link;
    }
  }
}
