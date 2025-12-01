import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoSegmentedBasicComponent } from './basic';
import { NzDemoSegmentedBlockComponent } from './block';
import { NzDemoSegmentedCustomComponent } from './custom';
import { NzDemoSegmentedDisabledComponent } from './disabled';
import { NzDemoSegmentedDynamicComponent } from './dynamic';
import { NzDemoSegmentedIconComponent } from './icon';
import { NzDemoSegmentedShapeComponent } from './shape';
import { NzDemoSegmentedSizeComponent } from './size';
import { NzDemoSegmentedValueComponent } from './value';
import { NzDemoSegmentedVerticalComponent } from './vertical';
import { NzDemoSegmentedWithIconOnlyComponent } from './with-icon-only';
import { NzDemoSegmentedWithNameComponent } from './with-name';


@Component({
  selector     : 'nz-demo-segmented',
  imports      : [ShareModule, NzDemoSegmentedBasicComponent, NzDemoSegmentedBlockComponent, NzDemoSegmentedCustomComponent, NzDemoSegmentedDisabledComponent, NzDemoSegmentedDynamicComponent, NzDemoSegmentedIconComponent, NzDemoSegmentedShapeComponent, NzDemoSegmentedSizeComponent, NzDemoSegmentedValueComponent, NzDemoSegmentedVerticalComponent, NzDemoSegmentedWithIconOnlyComponent, NzDemoSegmentedWithNameComponent],
  templateUrl  : './zh.html'
})
export default class NzDemoSegmentedZhComponent {
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
