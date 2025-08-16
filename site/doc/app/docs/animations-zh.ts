import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-animations-zh',
  standalone   : true,
  imports      : [ShareModule],
  templateUrl  : './animations-zh.html'
})
export class NzDocAnimationsZhComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
