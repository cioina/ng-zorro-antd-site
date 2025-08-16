import { Component } from '@angular/core';
import { ShareModule } from '../share/share.module';

@Component({
  selector     : 'nz-doc-{{component}}-{{language}}',
  standalone   : true,
  imports      : [ShareModule],
  templateUrl  : './{{component}}-{{language}}.html'
})
export class NzDoc{{componentName}}Component {
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
