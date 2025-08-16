import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-direction-en',
  standalone   : true,
  imports      : [ShareModule],
  templateUrl  : './direction-en.html'
})
export class NzDocDirectionEnComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
