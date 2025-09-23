import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoRadioBasicComponent } from './basic';
import { NzDemoRadioDisableComponent } from './disable';
import { NzDemoRadioRadiobuttonComponent } from './radiobutton';
import { NzDemoRadioRadiogroupMoreComponent } from './radiogroup-more';
import { NzDemoRadioRadiogroupOptionsComponent } from './radiogroup-options';
import { NzDemoRadioRadiogroupWithNameComponent } from './radiogroup-with-name';
import { NzDemoRadioRadiogroupComponent } from './radiogroup';
import { NzDemoRadioSizeComponent } from './size';
import { NzDemoRadioSolidComponent } from './solid';


@Component({
  selector     : 'nz-demo-radio',
  imports      : [ShareModule, NzDemoRadioBasicComponent, NzDemoRadioDisableComponent, NzDemoRadioRadiobuttonComponent, NzDemoRadioRadiogroupMoreComponent, NzDemoRadioRadiogroupOptionsComponent, NzDemoRadioRadiogroupWithNameComponent, NzDemoRadioRadiogroupComponent, NzDemoRadioSizeComponent, NzDemoRadioSolidComponent],
  templateUrl  : './zh.html'
})
export class NzDemoRadioZhComponent {
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
