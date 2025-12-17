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
import { NzDemoQrCodeTypeComponent } from './type';


@Component({
  selector     : 'nz-demo-qr-code',
  imports      : [ShareModule, NzDemoQrCodeBackgroundComponent, NzDemoQrCodeBasicComponent, NzDemoQrCodeColorComponent, NzDemoQrCodeCustomStatusComponent, NzDemoQrCodeDownloadComponent, NzDemoQrCodeErrorLevelComponent, NzDemoQrCodeIconComponent, NzDemoQrCodePaddingComponent, NzDemoQrCodeStatusComponent, NzDemoQrCodeTypeComponent],
  templateUrl  : './en.html'
})
export default class NzDemoQrCodeEnComponent {
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
