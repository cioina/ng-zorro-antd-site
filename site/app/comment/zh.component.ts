import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoCommentBasicComponent } from './basic';
import { NzDemoCommentEditorComponent } from './editor';
import { NzDemoCommentListComponent } from './list';
import { NzDemoCommentNestedComponent } from './nested';


@Component({
  selector     : 'nz-demo-comment',
  imports      : [ShareModule, NzDemoCommentBasicComponent, NzDemoCommentEditorComponent, NzDemoCommentListComponent, NzDemoCommentNestedComponent],
  templateUrl  : './zh.html'
})
export class NzDemoCommentZhComponent {
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
