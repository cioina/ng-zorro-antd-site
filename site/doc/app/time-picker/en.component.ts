import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoTimePickerAddonComponent } from './addon';
import { NzDemoTimePickerBasicComponent } from './basic';
import { NzDemoTimePickerDisabledPartComponent } from './disabled-part';
import { NzDemoTimePickerDisabledComponent } from './disabled';
import { NzDemoTimePickerHideColumnComponent } from './hide-column';
import { NzDemoTimePickerIntervalOptionsComponent } from './interval-options';
import { NzDemoTimePickerSizeComponent } from './size';
import { NzDemoTimePickerStatusComponent } from './status';
import { NzDemoTimePickerUse12HoursComponent } from './use12-hours';
import { NzDemoTimePickerValueComponent } from './value';
import { NzDemoTimePickerVariantComponent } from './variant';


@Component({
  selector     : 'nz-demo-time-picker',
  standalone   : true,
  imports      : [
    ShareModule,
		NzDemoTimePickerAddonComponent,
		NzDemoTimePickerBasicComponent,
		NzDemoTimePickerDisabledPartComponent,
		NzDemoTimePickerDisabledComponent,
		NzDemoTimePickerHideColumnComponent,
		NzDemoTimePickerIntervalOptionsComponent,
		NzDemoTimePickerSizeComponent,
		NzDemoTimePickerStatusComponent,
		NzDemoTimePickerUse12HoursComponent,
		NzDemoTimePickerValueComponent,
		NzDemoTimePickerVariantComponent,

  ],
  templateUrl  : './en.html'
})
export class NzDemoTimePickerEnComponent {
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
