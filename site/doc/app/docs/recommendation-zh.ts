import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-recommendation-zh',
  standalone   : true,
  imports      : [ShareModule],
  templateUrl  : './recommendation-zh.html'
})
export class NzDocRecommendationZhComponent {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
