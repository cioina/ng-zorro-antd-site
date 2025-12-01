import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-contributing-en',
  imports      : [ShareModule],
  templateUrl  : './contributing-en.html'
})
export default class NzDocContributingEnComponent {
  goLink(link: string): void {
    if (window) {
      window.location.hash = link;
    }
  }
}
