import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoPipesAggregateComponent } from './aggregate';
import { NzDemoPipesBytesComponent } from './bytes';
import { NzDemoPipesCssUnitComponent } from './css-unit';
import { NzDemoPipesEllipsisComponent } from './ellipsis';
import { NzDemoPipesSanitizerComponent } from './sanitizer';
import { NzDemoPipesTrimComponent } from './trim';


@Component({
  selector     : 'nz-demo-pipes',
  imports      : [ShareModule, NzDemoPipesAggregateComponent, NzDemoPipesBytesComponent, NzDemoPipesCssUnitComponent, NzDemoPipesEllipsisComponent, NzDemoPipesSanitizerComponent, NzDemoPipesTrimComponent],
  templateUrl  : './en.html'
})
export class NzDemoPipesEnComponent {
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
