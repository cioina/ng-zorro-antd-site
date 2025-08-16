import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoProgressCircleMiniComponent } from './circle-mini';
import { NzDemoProgressCircleComponent } from './circle';
import { NzDemoProgressDashboardComponent } from './dashboard';
import { NzDemoProgressDynamicComponent } from './dynamic';
import { NzDemoProgressFormatComponent } from './format';
import { NzDemoProgressGradientComponent } from './gradient';
import { NzDemoProgressLineMiniComponent } from './line-mini';
import { NzDemoProgressLineComponent } from './line';
import { NzDemoProgressRoundComponent } from './round';
import { NzDemoProgressSegmentComponent } from './segment';
import { NzDemoProgressStepComponent } from './step';


@Component({
  selector     : 'nz-demo-progress',
  standalone   : true,
  imports      : [
    ShareModule,
		NzDemoProgressCircleMiniComponent,
		NzDemoProgressCircleComponent,
		NzDemoProgressDashboardComponent,
		NzDemoProgressDynamicComponent,
		NzDemoProgressFormatComponent,
		NzDemoProgressGradientComponent,
		NzDemoProgressLineMiniComponent,
		NzDemoProgressLineComponent,
		NzDemoProgressRoundComponent,
		NzDemoProgressSegmentComponent,
		NzDemoProgressStepComponent,

  ],
  templateUrl  : './zh.html'
})
export class NzDemoProgressZhComponent {
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
