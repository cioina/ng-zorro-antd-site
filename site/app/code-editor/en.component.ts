import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoCodeEditorBasicComponent } from './basic';
import { NzDemoCodeEditorComplexComponent } from './complex';
import { NzDemoCodeEditorConfigComponent } from './config';
import { NzDemoCodeEditorDiffComponent } from './diff';
import { NzDemoCodeEditorFullControlComponent } from './full-control';


@Component({
  selector     : 'nz-demo-code-editor',
  imports      : [ShareModule, NzDemoCodeEditorBasicComponent, NzDemoCodeEditorComplexComponent, NzDemoCodeEditorConfigComponent, NzDemoCodeEditorDiffComponent, NzDemoCodeEditorFullControlComponent],
  templateUrl  : './en.html'
})
export default class NzDemoCodeEditorEnComponent {
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
