import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-faq-zh',
  imports      : [ShareModule],
  templateUrl  : './faq-zh.html'
})
export class NzDocFaqZhComponent {
  goLink(link: string): void {
    if (window) {
      window.location.hash = link;
    }
  }
}
