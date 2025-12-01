import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-direction-zh',
  imports      : [ShareModule],
  templateUrl  : './direction-zh.html'
})
export default class NzDocDirectionZhComponent {
  goLink(link: string): void {
    if (window) {
      window.location.hash = link;
    }
  }
}
