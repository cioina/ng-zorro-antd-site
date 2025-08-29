import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoFloatButtonBasicComponent } from './basic';
import { NzDemoFloatButtonDescriptionComponent } from './description';
import { NzDemoFloatButtonGroupMenuComponent } from './group-menu';
import { NzDemoFloatButtonGroupPlacementComponent } from './group-placement';
import { NzDemoFloatButtonGroupComponent } from './group';
import { NzDemoFloatButtonOpenComponent } from './open';
import { NzDemoFloatButtonShapeComponent } from './shape';
import { NzDemoFloatButtonTooltipComponent } from './tooltip';
import { NzDemoFloatButtonTopComponent } from './top';
import { NzDemoFloatButtonTypeComponent } from './type';


@Component({
  selector     : 'nz-demo-float-button',
  standalone   : true,
  imports      : [
    ShareModule,
		NzDemoFloatButtonBasicComponent,
		NzDemoFloatButtonDescriptionComponent,
		NzDemoFloatButtonGroupMenuComponent,
		NzDemoFloatButtonGroupPlacementComponent,
		NzDemoFloatButtonGroupComponent,
		NzDemoFloatButtonOpenComponent,
		NzDemoFloatButtonShapeComponent,
		NzDemoFloatButtonTooltipComponent,
		NzDemoFloatButtonTopComponent,
		NzDemoFloatButtonTypeComponent,

  ],
  templateUrl  : './en.html'
})
export class NzDemoFloatButtonEnComponent {
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
