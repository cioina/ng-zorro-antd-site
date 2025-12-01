import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-contributing-zh',
  imports      : [ShareModule],
  templateUrl  : './contributing-zh.html'
})
export default class NzDocContributingZhComponent {
  goLink(link: string): void {
    if (window) {
      window.location.hash = link;
    }
  }
}
