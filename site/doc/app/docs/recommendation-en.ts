import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-recommendation-en',
  imports      : [ShareModule],
  templateUrl  : './recommendation-en.html'
})
export class NzDocRecommendationEnComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
