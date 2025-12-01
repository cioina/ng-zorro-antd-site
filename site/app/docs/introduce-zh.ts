import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-introduce-zh',
  imports      : [ShareModule],
  templateUrl  : './introduce-zh.html'
})
export default class NzDocIntroduceZhComponent {
  goLink(link: string): void {
    if (window) {
      window.location.hash = link;
    }
  }
}
