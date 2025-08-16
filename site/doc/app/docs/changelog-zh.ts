import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-changelog-zh',
  standalone   : true,
  imports      : [ShareModule],
  templateUrl  : './changelog-zh.html'
})
export class NzDocChangelogZhComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
