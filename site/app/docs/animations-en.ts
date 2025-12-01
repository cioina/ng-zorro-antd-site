import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-animations-en',
  imports      : [ShareModule],
  templateUrl  : './animations-en.html'
})
export default class NzDocAnimationsEnComponent {
  goLink(link: string): void {
    if (window) {
      window.location.hash = link;
    }
  }
}
