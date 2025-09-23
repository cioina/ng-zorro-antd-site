import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoInputAddonComponent } from './addon';
import { NzDemoInputAllowClearComponent } from './allow-clear';
import { NzDemoInputAutosizeTextareaComponent } from './autosize-textarea';
import { NzDemoInputBasicComponent } from './basic';
import { NzDemoInputOtpComponent } from './otp';
import { NzDemoInputPasswordInputComponent } from './password-input';
import { NzDemoInputPresuffixComponent } from './presuffix';
import { NzDemoInputSearchInputComponent } from './search-input';
import { NzDemoInputSizeComponent } from './size';
import { NzDemoInputStatusComponent } from './status';
import { NzDemoInputTextareaWithCharacterCountComponent } from './textarea-with-character-count';
import { NzDemoInputTextareaComponent } from './textarea';
import { NzDemoInputTooltipComponent } from './tooltip';
import { NzDemoInputVariantComponent } from './variant';


@Component({
  selector     : 'nz-demo-input',
  imports      : [ShareModule, NzDemoInputAddonComponent, NzDemoInputAllowClearComponent, NzDemoInputAutosizeTextareaComponent, NzDemoInputBasicComponent, NzDemoInputOtpComponent, NzDemoInputPasswordInputComponent, NzDemoInputPresuffixComponent, NzDemoInputSearchInputComponent, NzDemoInputSizeComponent, NzDemoInputStatusComponent, NzDemoInputTextareaWithCharacterCountComponent, NzDemoInputTextareaComponent, NzDemoInputTooltipComponent, NzDemoInputVariantComponent],
  templateUrl  : './zh.html'
})
export class NzDemoInputZhComponent {
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
