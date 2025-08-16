import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-global-config-en',
  standalone   : true,
  imports      : [ShareModule],
  templateUrl  : './global-config-en.html'
})
export class NzDocGlobalConfigEnComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
