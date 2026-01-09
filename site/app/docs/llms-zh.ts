import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-llms-zh',
  imports      : [ShareModule],
  templateUrl  : './llms-zh.html'
})
export default class NzDocLlmsZhComponent {
  goLink(link: string): void {
    if (window) {
      window.location.hash = link;
    }
  }
}
