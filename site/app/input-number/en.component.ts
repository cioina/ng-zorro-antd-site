import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoInputNumberAddonComponent } from './addon';
import { NzDemoInputNumberBasicComponent } from './basic';
import { NzDemoInputNumberChangeOnWheelComponent } from './change-on-wheel';
import { NzDemoInputNumberDigitComponent } from './digit';
import { NzDemoInputNumberDisabledComponent } from './disabled';
import { NzDemoInputNumberFocusComponent } from './focus';
import { NzDemoInputNumberFormatterComponent } from './formatter';
import { NzDemoInputNumberHandlerIconComponent } from './handler-icon';
import { NzDemoInputNumberKeyboardComponent } from './keyboard';
import { NzDemoInputNumberOutOfRangeComponent } from './out-of-range';
import { NzDemoInputNumberPrefixComponent } from './prefix';
import { NzDemoInputNumberSizeComponent } from './size';
import { NzDemoInputNumberStatusComponent } from './status';
import { NzDemoInputNumberVariantComponent } from './variant';


@Component({
  selector     : 'nz-demo-input-number',
  imports      : [ShareModule, NzDemoInputNumberAddonComponent, NzDemoInputNumberBasicComponent, NzDemoInputNumberChangeOnWheelComponent, NzDemoInputNumberDigitComponent, NzDemoInputNumberDisabledComponent, NzDemoInputNumberFocusComponent, NzDemoInputNumberFormatterComponent, NzDemoInputNumberHandlerIconComponent, NzDemoInputNumberKeyboardComponent, NzDemoInputNumberOutOfRangeComponent, NzDemoInputNumberPrefixComponent, NzDemoInputNumberSizeComponent, NzDemoInputNumberStatusComponent, NzDemoInputNumberVariantComponent],
  templateUrl  : './en.html'
})
export default class NzDemoInputNumberEnComponent {
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
