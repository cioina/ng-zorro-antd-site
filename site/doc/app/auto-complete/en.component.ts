import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoAutoCompleteBasicComponent } from './basic';
import { NzDemoAutoCompleteCertainCategoryComponent } from './certain-category';
import { NzDemoAutoCompleteCustomComponent } from './custom';
import { NzDemoAutoCompleteNonCaseSensitiveComponent } from './non-case-sensitive';
import { NzDemoAutoCompleteObjectValueComponent } from './object-value';
import { NzDemoAutoCompleteOptionsComponent } from './options';
import { NzDemoAutoCompleteStatusComponent } from './status';
import { NzDemoAutoCompleteUncertainCategoryComponent } from './uncertain-category';


@Component({
  selector     : 'nz-demo-auto-complete',
  imports      : [ShareModule, NzDemoAutoCompleteBasicComponent, NzDemoAutoCompleteCertainCategoryComponent, NzDemoAutoCompleteCustomComponent, NzDemoAutoCompleteNonCaseSensitiveComponent, NzDemoAutoCompleteObjectValueComponent, NzDemoAutoCompleteOptionsComponent, NzDemoAutoCompleteStatusComponent, NzDemoAutoCompleteUncertainCategoryComponent],
  templateUrl  : './en.html'
})
export class NzDemoAutoCompleteEnComponent {
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
