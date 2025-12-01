import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoTabsBasicComponent } from './basic';
import { NzDemoTabsCardTopComponent } from './card-top';
import { NzDemoTabsCardComponent } from './card';
import { NzDemoTabsCenteredComponent } from './centered';
import { NzDemoTabsCustomAddTriggerComponent } from './custom-add-trigger';
import { NzDemoTabsDisabledComponent } from './disabled';
import { NzDemoTabsDraggableComponent } from './draggable';
import { NzDemoTabsEditableCardComponent } from './editable-card';
import { NzDemoTabsExtraComponent } from './extra';
import { NzDemoTabsGuardComponent } from './guard';
import { NzDemoTabsIconComponent } from './icon';
import { NzDemoTabsLazyComponent } from './lazy';
import { NzDemoTabsLinkRouterComponent } from './link-router';
import { NzDemoTabsPositionComponent } from './position';
import { NzDemoTabsSizeComponent } from './size';
import { NzDemoTabsSlideComponent } from './slide';


@Component({
  selector     : 'nz-demo-tabs',
  imports      : [ShareModule, NzDemoTabsBasicComponent, NzDemoTabsCardTopComponent, NzDemoTabsCardComponent, NzDemoTabsCenteredComponent, NzDemoTabsCustomAddTriggerComponent, NzDemoTabsDisabledComponent, NzDemoTabsDraggableComponent, NzDemoTabsEditableCardComponent, NzDemoTabsExtraComponent, NzDemoTabsGuardComponent, NzDemoTabsIconComponent, NzDemoTabsLazyComponent, NzDemoTabsLinkRouterComponent, NzDemoTabsPositionComponent, NzDemoTabsSizeComponent, NzDemoTabsSlideComponent],
  templateUrl  : './en.html'
})
export default class NzDemoTabsEnComponent {
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
