import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoCronExpressionBasicComponent } from './basic';
import { NzDemoCronExpressionBorderlessComponent } from './borderless';
import { NzDemoCronExpressionCollapseComponent } from './collapse';
import { NzDemoCronExpressionSemanticComponent } from './semantic';
import { NzDemoCronExpressionShortcutsComponent } from './shortcuts';
import { NzDemoCronExpressionSizeComponent } from './size';
import { NzDemoCronExpressionTypeComponent } from './type';
import { NzDemoCronExpressionUseComponent } from './use';


@Component({
  selector     : 'nz-demo-cron-expression',
  imports      : [ShareModule, NzDemoCronExpressionBasicComponent, NzDemoCronExpressionBorderlessComponent, NzDemoCronExpressionCollapseComponent, NzDemoCronExpressionSemanticComponent, NzDemoCronExpressionShortcutsComponent, NzDemoCronExpressionSizeComponent, NzDemoCronExpressionTypeComponent, NzDemoCronExpressionUseComponent],
  templateUrl  : './en.html'
})
export class NzDemoCronExpressionEnComponent {
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
