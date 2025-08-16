import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoAffixBasicComponent } from './basic';
import { NzDemoAffixOnChangeComponent } from './on-change';
import { NzDemoAffixTargetComponent } from './target';


@Component({
  selector     : 'nz-demo-affix',
  standalone   : true,
  imports      : [
    ShareModule,
		NzDemoAffixBasicComponent,
		NzDemoAffixOnChangeComponent,
		NzDemoAffixTargetComponent,

  ],
  templateUrl  : './zh.html'
})
export class NzDemoAffixZhComponent {
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
