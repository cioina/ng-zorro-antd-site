import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-changelog-en',
  imports      : [ShareModule],
  templateUrl  : './changelog-en.html'
})
export default class NzDocChangelogEnComponent {
  goLink(link: string): void {
    if (window) {
      window.location.hash = link;
    }
  }
}
