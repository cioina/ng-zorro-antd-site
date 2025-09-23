import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-animations-en',
  imports      : [ShareModule],
  templateUrl  : './animations-en.html'
})
export class NzDocAnimationsEnComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
