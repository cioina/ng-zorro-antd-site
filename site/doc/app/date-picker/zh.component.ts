import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoDatePickerBasicComponent } from './basic';
import { NzDemoDatePickerDateRenderComponent } from './date-render';
import { NzDemoDatePickerDisabledDateComponent } from './disabled-date';
import { NzDemoDatePickerDisabledComponent } from './disabled';
import { NzDemoDatePickerExtraFooterComponent } from './extra-footer';
import { NzDemoDatePickerFormatComponent } from './format';
import { NzDemoDatePickerInlineComponent } from './inline';
import { NzDemoDatePickerPlacementComponent } from './placement';
import { NzDemoDatePickerPresettedRangesComponent } from './presetted-ranges';
import { NzDemoDatePickerRangePickerComponent } from './range-picker';
import { NzDemoDatePickerSizeComponent } from './size';
import { NzDemoDatePickerStartEndComponent } from './start-end';
import { NzDemoDatePickerStatusComponent } from './status';
import { NzDemoDatePickerSwitchComponent } from './switch';
import { NzDemoDatePickerTimeComponent } from './time';
import { NzDemoDatePickerVariantComponent } from './variant';
import { NzDemoDatePickerWeekNumberComponent } from './week-number';


@Component({
  selector     : 'nz-demo-date-picker',
  standalone   : true,
  imports      : [
    ShareModule,
		NzDemoDatePickerBasicComponent,
		NzDemoDatePickerDateRenderComponent,
		NzDemoDatePickerDisabledDateComponent,
		NzDemoDatePickerDisabledComponent,
		NzDemoDatePickerExtraFooterComponent,
		NzDemoDatePickerFormatComponent,
		NzDemoDatePickerInlineComponent,
		NzDemoDatePickerPlacementComponent,
		NzDemoDatePickerPresettedRangesComponent,
		NzDemoDatePickerRangePickerComponent,
		NzDemoDatePickerSizeComponent,
		NzDemoDatePickerStartEndComponent,
		NzDemoDatePickerStatusComponent,
		NzDemoDatePickerSwitchComponent,
		NzDemoDatePickerTimeComponent,
		NzDemoDatePickerVariantComponent,
		NzDemoDatePickerWeekNumberComponent,

  ],
  templateUrl  : './zh.html'
})
export class NzDemoDatePickerZhComponent {
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
