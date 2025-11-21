import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoCheckboxBasicComponent } from './basic';
import { NzDemoCheckboxCheckAllComponent } from './check-all';
import { NzDemoCheckboxControllerComponent } from './controller';
import { NzDemoCheckboxDisabledComponent } from './disabled';
import { NzDemoCheckboxGroupComponent } from './group';
import { NzDemoCheckboxLayoutComponent } from './layout';


@Component({
  selector     : 'nz-demo-checkbox',
  imports      : [ShareModule, NzDemoCheckboxBasicComponent, NzDemoCheckboxCheckAllComponent, NzDemoCheckboxControllerComponent, NzDemoCheckboxDisabledComponent, NzDemoCheckboxGroupComponent, NzDemoCheckboxLayoutComponent],
  templateUrl  : './en.html'
})
export class NzDemoCheckboxEnComponent {
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
