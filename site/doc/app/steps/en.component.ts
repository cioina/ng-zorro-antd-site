import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoStepsClickableComponent } from './clickable';
import { NzDemoStepsCustomizedProgressDotComponent } from './customized-progress-dot';
import { NzDemoStepsErrorComponent } from './error';
import { NzDemoStepsIconComponent } from './icon';
import { NzDemoStepsNavComponent } from './nav';
import { NzDemoStepsProgressDotComponent } from './progress-dot';
import { NzDemoStepsProgressComponent } from './progress';
import { NzDemoStepsSimpleComponent } from './simple';
import { NzDemoStepsSmallSizeComponent } from './small-size';
import { NzDemoStepsStartIndexComponent } from './start-index';
import { NzDemoStepsStepNextComponent } from './step-next';
import { NzDemoStepsVerticalSmallComponent } from './vertical-small';
import { NzDemoStepsVerticalComponent } from './vertical';


@Component({
  selector     : 'nz-demo-steps',
  standalone   : true,
  imports      : [
    ShareModule,
		NzDemoStepsClickableComponent,
		NzDemoStepsCustomizedProgressDotComponent,
		NzDemoStepsErrorComponent,
		NzDemoStepsIconComponent,
		NzDemoStepsNavComponent,
		NzDemoStepsProgressDotComponent,
		NzDemoStepsProgressComponent,
		NzDemoStepsSimpleComponent,
		NzDemoStepsSmallSizeComponent,
		NzDemoStepsStartIndexComponent,
		NzDemoStepsStepNextComponent,
		NzDemoStepsVerticalSmallComponent,
		NzDemoStepsVerticalComponent,

  ],
  templateUrl  : './en.html'
})
export class NzDemoStepsEnComponent {
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
