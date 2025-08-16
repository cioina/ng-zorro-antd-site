import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-join-zh',
  standalone   : true,
  imports      : [ShareModule],
  templateUrl  : './join-zh.html'
})
export class NzDocJoinZhComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
