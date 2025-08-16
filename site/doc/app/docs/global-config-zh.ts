import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-global-config-zh',
  standalone   : true,
  imports      : [ShareModule],
  templateUrl  : './global-config-zh.html'
})
export class NzDocGlobalConfigZhComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
