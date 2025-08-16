import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-contributing-zh',
  standalone   : true,
  imports      : [ShareModule],
  templateUrl  : './contributing-zh.html'
})
export class NzDocContributingZhComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
