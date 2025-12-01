import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoColorPickerBasicComponent } from './basic';
import { NzDemoColorPickerBlockComponent } from './block';
import { NzDemoColorPickerClearComponent } from './clear';
import { NzDemoColorPickerDisableAlphaComponent } from './disable-alpha';
import { NzDemoColorPickerDisableComponent } from './disable';
import { NzDemoColorPickerFlipFlopComponent } from './flip-flop';
import { NzDemoColorPickerFormatComponent } from './format';
import { NzDemoColorPickerShowTextComponent } from './show-text';
import { NzDemoColorPickerSizeComponent } from './size';
import { NzDemoColorPickerTriggerComponent } from './trigger';
import { NzDemoColorPickerUseComponent } from './use';


@Component({
  selector     : 'nz-demo-color-picker',
  imports      : [ShareModule, NzDemoColorPickerBasicComponent, NzDemoColorPickerBlockComponent, NzDemoColorPickerClearComponent, NzDemoColorPickerDisableAlphaComponent, NzDemoColorPickerDisableComponent, NzDemoColorPickerFlipFlopComponent, NzDemoColorPickerFormatComponent, NzDemoColorPickerShowTextComponent, NzDemoColorPickerSizeComponent, NzDemoColorPickerTriggerComponent, NzDemoColorPickerUseComponent],
  templateUrl  : './zh.html'
})
export default class NzDemoColorPickerZhComponent {
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
