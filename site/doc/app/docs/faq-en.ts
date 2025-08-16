import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-faq-en',
  standalone   : true,
  imports      : [ShareModule],
  templateUrl  : './faq-en.html'
})
export class NzDocFaqEnComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
