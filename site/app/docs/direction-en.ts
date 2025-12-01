import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-direction-en',
  imports      : [ShareModule],
  templateUrl  : './direction-en.html'
})
export default class NzDocDirectionEnComponent {
  goLink(link: string): void {
    if (window) {
      window.location.hash = link;
    }
  }
}
