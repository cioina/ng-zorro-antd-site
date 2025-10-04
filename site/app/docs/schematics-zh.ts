import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-schematics-zh',
  imports      : [ShareModule],
  templateUrl  : './schematics-zh.html'
})
export class NzDocSchematicsZhComponent {
  goLink(link: string): void {
    if (window) {
      window.location.hash = link;
    }
  }
}
