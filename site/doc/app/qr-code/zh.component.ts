import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoQrCodeBackgroundComponent } from './background';
import { NzDemoQrCodeBasicComponent } from './basic';
import { NzDemoQrCodeColorComponent } from './color';
import { NzDemoQrCodeCustomStatusComponent } from './custom-status';
import { NzDemoQrCodeDownloadComponent } from './download';
import { NzDemoQrCodeErrorLevelComponent } from './error-level';
import { NzDemoQrCodeIconComponent } from './icon';
import { NzDemoQrCodePaddingComponent } from './padding';
import { NzDemoQrCodeStatusComponent } from './status';


@Component({
  selector     : 'nz-demo-qr-code',
  standalone   : true,
  imports      : [
    ShareModule,
		NzDemoQrCodeBackgroundComponent,
		NzDemoQrCodeBasicComponent,
		NzDemoQrCodeColorComponent,
		NzDemoQrCodeCustomStatusComponent,
		NzDemoQrCodeDownloadComponent,
		NzDemoQrCodeErrorLevelComponent,
		NzDemoQrCodeIconComponent,
		NzDemoQrCodePaddingComponent,
		NzDemoQrCodeStatusComponent,

  ],
  templateUrl  : './zh.html'
})
export class NzDemoQrCodeZhComponent {
  expanded = false;
  @ViewChildren(NzCodeBoxComponent) codeBoxes!: QueryList<NzCodeBoxComponent>;

  goLink(link: string): void {
    if (window) {
      window.location.hash = link;
    }
  }

  expandAllCode(): void {
    this.expanded = !this.expanded;
    this.codeBoxes.forEach(code => code.expandCode(this.expanded));
  }
}
