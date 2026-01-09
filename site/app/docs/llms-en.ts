import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-llms-en',
  imports      : [ShareModule],
  templateUrl  : './llms-en.html'
})
export default class NzDocLlmsEnComponent {
  goLink(link: string): void {
    if (window) {
      window.location.hash = link;
    }
  }
}
