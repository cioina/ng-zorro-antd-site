import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoCascaderBasicComponent } from './basic';
import { NzDemoCascaderChangeOnFunctionComponent } from './change-on-function';
import { NzDemoCascaderChangeOnSelectComponent } from './change-on-select';
import { NzDemoCascaderCustomFieldNamesComponent } from './custom-field-names';
import { NzDemoCascaderCustomRenderComponent } from './custom-render';
import { NzDemoCascaderCustomTemplateComponent } from './custom-template';
import { NzDemoCascaderDefaultValueAndAsyncOptionsComponent } from './default-value-and-async-options';
import { NzDemoCascaderDefaultValueAndLazyLoadComponent } from './default-value-and-lazy-load';
import { NzDemoCascaderDefaultValueComponent } from './default-value';
import { NzDemoCascaderDisabledComponent } from './disabled';
import { NzDemoCascaderHoverComponent } from './hover';
import { NzDemoCascaderLazyComponent } from './lazy';
import { NzDemoCascaderModalComponent } from './modal';
import { NzDemoCascaderMultipleComponent } from './multiple';
import { NzDemoCascaderOpenComponent } from './open';
import { NzDemoCascaderPlacementComponent } from './placement';
import { NzDemoCascaderPrefixAndSuffixComponent } from './prefix-and-suffix';
import { NzDemoCascaderReactiveFormComponent } from './reactive-form';
import { NzDemoCascaderSearchComponent } from './search';
import { NzDemoCascaderSizeComponent } from './size';
import { NzDemoCascaderStatusComponent } from './status';
import { NzDemoCascaderTriggerActionComponent } from './trigger-action';
import { NzDemoCascaderTriggerComponent } from './trigger';
import { NzDemoCascaderVariantComponent } from './variant';


@Component({
  selector     : 'nz-demo-cascader',
  imports      : [ShareModule, NzDemoCascaderBasicComponent, NzDemoCascaderChangeOnFunctionComponent, NzDemoCascaderChangeOnSelectComponent, NzDemoCascaderCustomFieldNamesComponent, NzDemoCascaderCustomRenderComponent, NzDemoCascaderCustomTemplateComponent, NzDemoCascaderDefaultValueAndAsyncOptionsComponent, NzDemoCascaderDefaultValueAndLazyLoadComponent, NzDemoCascaderDefaultValueComponent, NzDemoCascaderDisabledComponent, NzDemoCascaderHoverComponent, NzDemoCascaderLazyComponent, NzDemoCascaderModalComponent, NzDemoCascaderMultipleComponent, NzDemoCascaderOpenComponent, NzDemoCascaderPlacementComponent, NzDemoCascaderPrefixAndSuffixComponent, NzDemoCascaderReactiveFormComponent, NzDemoCascaderSearchComponent, NzDemoCascaderSizeComponent, NzDemoCascaderStatusComponent, NzDemoCascaderTriggerActionComponent, NzDemoCascaderTriggerComponent, NzDemoCascaderVariantComponent],
  templateUrl  : './en.html'
})
export class NzDemoCascaderEnComponent {
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
