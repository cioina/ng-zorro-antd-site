import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoTimePickerAddonComponent } from './addon';
import { NzDemoTimePickerBasicComponent } from './basic';
import { NzDemoTimePickerConfirmationComponent } from './confirmation';
import { NzDemoTimePickerDisabledPartComponent } from './disabled-part';
import { NzDemoTimePickerDisabledComponent } from './disabled';
import { NzDemoTimePickerHideColumnComponent } from './hide-column';
import { NzDemoTimePickerIntervalOptionsComponent } from './interval-options';
import { NzDemoTimePickerPlacementComponent } from './placement';
import { NzDemoTimePickerPrefixSuffixComponent } from './prefix-suffix';
import { NzDemoTimePickerSizeComponent } from './size';
import { NzDemoTimePickerStatusComponent } from './status';
import { NzDemoTimePickerUse12HoursComponent } from './use12-hours';
import { NzDemoTimePickerValueComponent } from './value';
import { NzDemoTimePickerVariantComponent } from './variant';


@Component({
  selector     : 'nz-demo-time-picker',
  imports      : [ShareModule, NzDemoTimePickerAddonComponent, NzDemoTimePickerBasicComponent, NzDemoTimePickerConfirmationComponent, NzDemoTimePickerDisabledPartComponent, NzDemoTimePickerDisabledComponent, NzDemoTimePickerHideColumnComponent, NzDemoTimePickerIntervalOptionsComponent, NzDemoTimePickerPlacementComponent, NzDemoTimePickerPrefixSuffixComponent, NzDemoTimePickerSizeComponent, NzDemoTimePickerStatusComponent, NzDemoTimePickerUse12HoursComponent, NzDemoTimePickerValueComponent, NzDemoTimePickerVariantComponent],
  templateUrl  : './en.html'
})
export default class NzDemoTimePickerEnComponent {
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
