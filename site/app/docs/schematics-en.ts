import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-schematics-en',
  imports      : [ShareModule],
  templateUrl  : './schematics-en.html'
})
export default class NzDocSchematicsEnComponent {
  goLink(link: string): void {
    if (window) {
      window.location.hash = link;
    }
  }
}
