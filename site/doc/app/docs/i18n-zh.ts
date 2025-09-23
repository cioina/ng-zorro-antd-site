import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-i18n-zh',
  imports      : [ShareModule],
  templateUrl  : './i18n-zh.html'
})
export class NzDocI18NZhComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
