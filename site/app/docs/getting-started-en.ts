import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-getting-started-en',
  imports      : [ShareModule],
  templateUrl  : './getting-started-en.html'
})
export default class NzDocGettingStartedEnComponent {
  goLink(link: string): void {
    if (window) {
      window.location.hash = link;
    }
  }
}
