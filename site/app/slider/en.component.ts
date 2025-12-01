import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoSliderBasicComponent } from './basic';
import { NzDemoSliderEventComponent } from './event';
import { NzDemoSliderIconSliderComponent } from './icon-slider';
import { NzDemoSliderInputNumberComponent } from './input-number';
import { NzDemoSliderMarkComponent } from './mark';
import { NzDemoSliderReverseComponent } from './reverse';
import { NzDemoSliderTipFormatterComponent } from './tip-formatter';
import { NzDemoSliderTooltipComponent } from './tooltip';
import { NzDemoSliderVerticalComponent } from './vertical';


@Component({
  selector     : 'nz-demo-slider',
  imports      : [ShareModule, NzDemoSliderBasicComponent, NzDemoSliderEventComponent, NzDemoSliderIconSliderComponent, NzDemoSliderInputNumberComponent, NzDemoSliderMarkComponent, NzDemoSliderReverseComponent, NzDemoSliderTipFormatterComponent, NzDemoSliderTooltipComponent, NzDemoSliderVerticalComponent],
  templateUrl  : './en.html'
})
export default class NzDemoSliderEnComponent {
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
