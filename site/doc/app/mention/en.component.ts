import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoMentionAsyncComponent } from './async';
import { NzDemoMentionAvatarComponent } from './avatar';
import { NzDemoMentionBasicComponent } from './basic';
import { NzDemoMentionCustomTagComponent } from './custom-tag';
import { NzDemoMentionFormComponent } from './form';
import { NzDemoMentionMultilinesComponent } from './multilines';
import { NzDemoMentionPlacementComponent } from './placement';
import { NzDemoMentionPrefixComponent } from './prefix';
import { NzDemoMentionPreviewComponent } from './preview';
import { NzDemoMentionReadonlyComponent } from './readonly';
import { NzDemoMentionStatusComponent } from './status';


@Component({
  selector     : 'nz-demo-mention',
  standalone   : true,
  imports      : [
    ShareModule,
		NzDemoMentionAsyncComponent,
		NzDemoMentionAvatarComponent,
		NzDemoMentionBasicComponent,
		NzDemoMentionCustomTagComponent,
		NzDemoMentionFormComponent,
		NzDemoMentionMultilinesComponent,
		NzDemoMentionPlacementComponent,
		NzDemoMentionPrefixComponent,
		NzDemoMentionPreviewComponent,
		NzDemoMentionReadonlyComponent,
		NzDemoMentionStatusComponent,

  ],
  templateUrl  : './en.html'
})
export class NzDemoMentionEnComponent {
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
