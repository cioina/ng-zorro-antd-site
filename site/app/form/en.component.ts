import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoFormAdvancedSearchComponent } from './advanced-search';
import { NzDemoFormAutoTipsComponent } from './auto-tips';
import { NzDemoFormCoordinatedComponent } from './coordinated';
import { NzDemoFormDynamicFormItemComponent } from './dynamic-form-item';
import { NzDemoFormDynamicRuleComponent } from './dynamic-rule';
import { NzDemoFormHorizontalLoginComponent } from './horizontal-login';
import { NzDemoFormLabelAlignComponent } from './label-align';
import { NzDemoFormLabelWrapComponent } from './label-wrap';
import { NzDemoFormLayoutComponent } from './layout';
import { NzDemoFormNormalLoginComponent } from './normal-login';
import { NzDemoFormRegisterComponent } from './register';
import { NzDemoFormTimeRelatedControlsComponent } from './time-related-controls';
import { NzDemoFormValidateReactiveComponent } from './validate-reactive';
import { NzDemoFormValidateStaticComponent } from './validate-static';
import { NzDemoFormValidateTemplateComponent } from './validate-template';


@Component({
  selector     : 'nz-demo-form',
  imports      : [ShareModule, NzDemoFormAdvancedSearchComponent, NzDemoFormAutoTipsComponent, NzDemoFormCoordinatedComponent, NzDemoFormDynamicFormItemComponent, NzDemoFormDynamicRuleComponent, NzDemoFormHorizontalLoginComponent, NzDemoFormLabelAlignComponent, NzDemoFormLabelWrapComponent, NzDemoFormLayoutComponent, NzDemoFormNormalLoginComponent, NzDemoFormRegisterComponent, NzDemoFormTimeRelatedControlsComponent, NzDemoFormValidateReactiveComponent, NzDemoFormValidateStaticComponent, NzDemoFormValidateTemplateComponent],
  templateUrl  : './en.html'
})
export class NzDemoFormEnComponent {
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
