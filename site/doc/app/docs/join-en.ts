import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-join-en',
  imports      : [ShareModule],
  templateUrl  : './join-en.html'
})
export class NzDocJoinEnComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
