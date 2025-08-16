import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-getting-started-zh',
  standalone   : true,
  imports      : [ShareModule],
  templateUrl  : './getting-started-zh.html'
})
export class NzDocGettingStartedZhComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
