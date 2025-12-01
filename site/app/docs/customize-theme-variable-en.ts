import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-customize-theme-variable-en',
  imports      : [ShareModule],
  templateUrl  : './customize-theme-variable-en.html'
})
export default class NzDocCustomizeThemeVariableEnComponent {
  goLink(link: string): void {
    if (window) {
      window.location.hash = link;
    }
  }
}
