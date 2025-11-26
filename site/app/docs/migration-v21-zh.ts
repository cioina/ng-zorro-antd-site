import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-migration-v21-zh',
  imports      : [ShareModule],
  templateUrl  : './migration-v21-zh.html'
})
export class NzDocMigrationV21ZhComponent {
  goLink(link: string): void {
    if (window) {
      window.location.hash = link;
    }
  }
}
