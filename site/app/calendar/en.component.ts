import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoCalendarBasicComponent } from './basic';
import { NzDemoCalendarCardComponent } from './card';
import { NzDemoCalendarCustomizeHeaderComponent } from './customize-header';
import { NzDemoCalendarNoticeCalendarComponent } from './notice-calendar';
import { NzDemoCalendarSelectComponent } from './select';


@Component({
  selector     : 'nz-demo-calendar',
  imports      : [ShareModule, NzDemoCalendarBasicComponent, NzDemoCalendarCardComponent, NzDemoCalendarCustomizeHeaderComponent, NzDemoCalendarNoticeCalendarComponent, NzDemoCalendarSelectComponent],
  templateUrl  : './en.html'
})
export default class NzDemoCalendarEnComponent {
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
