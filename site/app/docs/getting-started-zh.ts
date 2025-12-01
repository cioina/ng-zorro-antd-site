import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-getting-started-zh',
  imports      : [ShareModule],
  templateUrl  : './getting-started-zh.html'
})
export default class NzDocGettingStartedZhComponent {
  goLink(link: string): void {
    if (window) {
      window.location.hash = link;
    }
  }
}
