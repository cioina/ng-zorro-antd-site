import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-migration-v20-zh',
  imports      : [ShareModule],
  templateUrl  : './migration-v20-zh.html'
})
export class NzDocMigrationV20ZhComponent {
  goLink(link: string): void {
    if (window) {
      window.location.hash = link;
    }
  }
}
