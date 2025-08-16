import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-schematics-en',
  standalone   : true,
  imports      : [ShareModule],
  templateUrl  : './schematics-en.html'
})
export class NzDocSchematicsEnComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
