import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-changelog-en',
  standalone   : true,
  imports      : [ShareModule],
  templateUrl  : './changelog-en.html'
})
export class NzDocChangelogEnComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
