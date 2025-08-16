import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-direction-zh',
  standalone   : true,
  imports      : [ShareModule],
  templateUrl  : './direction-zh.html'
})
export class NzDocDirectionZhComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
