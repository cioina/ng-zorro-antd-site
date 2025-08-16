import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-customize-theme-variable-en',
  standalone   : true,
  imports      : [ShareModule],
  templateUrl  : './customize-theme-variable-en.html'
})
export class NzDocCustomizeThemeVariableEnComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
