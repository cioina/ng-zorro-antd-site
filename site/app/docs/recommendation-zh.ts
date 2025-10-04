import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-recommendation-zh',
  imports      : [ShareModule],
  templateUrl  : './recommendation-zh.html'
})
export class NzDocRecommendationZhComponent {
  goLink(link: string): void {
    if (window) {
      window.location.hash = link;
    }
  }
}
