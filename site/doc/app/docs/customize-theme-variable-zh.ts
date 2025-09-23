import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-customize-theme-variable-zh',
  imports      : [ShareModule],
  templateUrl  : './customize-theme-variable-zh.html'
})
export class NzDocCustomizeThemeVariableZhComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
