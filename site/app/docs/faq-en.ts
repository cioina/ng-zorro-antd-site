import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-faq-en',
  imports      : [ShareModule],
  templateUrl  : './faq-en.html'
})
export default class NzDocFaqEnComponent {
  goLink(link: string): void {
    if (window) {
      window.location.hash = link;
    }
  }
}
