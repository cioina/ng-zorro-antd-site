import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-join-zh',
  imports      : [ShareModule],
  templateUrl  : './join-zh.html'
})
export default class NzDocJoinZhComponent {
  goLink(link: string): void {
    if (window) {
      window.location.hash = link;
    }
  }
}
