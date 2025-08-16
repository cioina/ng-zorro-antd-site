import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoAnchorBasicComponent } from './basic';
import { NzDemoAnchorCustomizeHighlightComponent } from './customize-highlight';
import { NzDemoAnchorHorizontalAnchorComponent } from './horizontal-anchor';
import { NzDemoAnchorOnChangeComponent } from './on-change';
import { NzDemoAnchorOnClickComponent } from './on-click';
import { NzDemoAnchorStaticComponent } from './static';
import { NzDemoAnchorTargetOffsetComponent } from './target-offset';


@Component({
  selector     : 'nz-demo-anchor',
  standalone   : true,
  imports      : [
    ShareModule,
		NzDemoAnchorBasicComponent,
		NzDemoAnchorCustomizeHighlightComponent,
		NzDemoAnchorHorizontalAnchorComponent,
		NzDemoAnchorOnChangeComponent,
		NzDemoAnchorOnClickComponent,
		NzDemoAnchorStaticComponent,
		NzDemoAnchorTargetOffsetComponent,

  ],
  templateUrl  : './zh.html'
})
export class NzDemoAnchorZhComponent {
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
