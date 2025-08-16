import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-migration-v20-en',
  standalone   : true,
  imports      : [ShareModule],
  templateUrl  : './migration-v20-en.html'
})
export class NzDocMigrationV20EnComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
