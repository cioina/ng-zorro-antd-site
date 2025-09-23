import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-i18n-en',
  imports      : [ShareModule],
  templateUrl  : './i18n-en.html'
})
export class NzDocI18NEnComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
