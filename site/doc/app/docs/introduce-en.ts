import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-introduce-en',
  imports      : [ShareModule],
  templateUrl  : './introduce-en.html'
})
export class NzDocIntroduceEnComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
