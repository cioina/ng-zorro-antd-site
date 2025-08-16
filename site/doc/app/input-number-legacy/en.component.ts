import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoInputNumberLegacyAddonComponent } from './addon';
import { NzDemoInputNumberLegacyBasicComponent } from './basic';
import { NzDemoInputNumberLegacyBorderlessComponent } from './borderless';
import { NzDemoInputNumberLegacyDigitComponent } from './digit';
import { NzDemoInputNumberLegacyDisabledComponent } from './disabled';
import { NzDemoInputNumberLegacyFormatterComponent } from './formatter';
import { NzDemoInputNumberLegacyPrecisionComponent } from './precision';
import { NzDemoInputNumberLegacyPrefixComponent } from './prefix';
import { NzDemoInputNumberLegacySizeComponent } from './size';
import { NzDemoInputNumberLegacyStatusComponent } from './status';


@Component({
  selector     : 'nz-demo-input-number-legacy',
  standalone   : true,
  imports      : [
    ShareModule,
		NzDemoInputNumberLegacyAddonComponent,
		NzDemoInputNumberLegacyBasicComponent,
		NzDemoInputNumberLegacyBorderlessComponent,
		NzDemoInputNumberLegacyDigitComponent,
		NzDemoInputNumberLegacyDisabledComponent,
		NzDemoInputNumberLegacyFormatterComponent,
		NzDemoInputNumberLegacyPrecisionComponent,
		NzDemoInputNumberLegacyPrefixComponent,
		NzDemoInputNumberLegacySizeComponent,
		NzDemoInputNumberLegacyStatusComponent,

  ],
  templateUrl  : './en.html'
})
export class NzDemoInputNumberLegacyEnComponent {
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
