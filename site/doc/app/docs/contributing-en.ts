import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-contributing-en',
  standalone   : true,
  imports      : [ShareModule],
  templateUrl  : './contributing-en.html'
})
export class NzDocContributingEnComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
