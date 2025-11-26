import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-migration-v21-en',
  imports      : [ShareModule],
  templateUrl  : './migration-v21-en.html'
})
export class NzDocMigrationV21EnComponent {
  goLink(link: string): void {
    if (window) {
      window.location.hash = link;
    }
  }
}
