import { Component, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../codebox/codebox.component';
import { ShareModule } from '../share/share.module';

import { NzDemoUploadAvatarComponent } from './avatar';
import { NzDemoUploadBasicComponent } from './basic';
import { NzDemoUploadDefaultFileListComponent } from './default-file-list';
import { NzDemoUploadDirectoryComponent } from './directory';
import { NzDemoUploadDragComponent } from './drag';
import { NzDemoUploadFileListComponent } from './file-list';
import { NzDemoUploadMaxCountComponent } from './max-count';
import { NzDemoUploadPictureCardComponent } from './picture-card';
import { NzDemoUploadPictureStyleComponent } from './picture-style';
import { NzDemoUploadPngOnlyComponent } from './png-only';
import { NzDemoUploadPreviewFileComponent } from './preview-file';
import { NzDemoUploadTransformFileComponent } from './transform-file';
import { NzDemoUploadUploadManuallyComponent } from './upload-manually';
import { NzDemoUploadUploadWithAliyunOssComponent } from './upload-with-aliyun-oss';


@Component({
  selector     : 'nz-demo-upload',
  imports      : [ShareModule, NzDemoUploadAvatarComponent, NzDemoUploadBasicComponent, NzDemoUploadDefaultFileListComponent, NzDemoUploadDirectoryComponent, NzDemoUploadDragComponent, NzDemoUploadFileListComponent, NzDemoUploadMaxCountComponent, NzDemoUploadPictureCardComponent, NzDemoUploadPictureStyleComponent, NzDemoUploadPngOnlyComponent, NzDemoUploadPreviewFileComponent, NzDemoUploadTransformFileComponent, NzDemoUploadUploadManuallyComponent, NzDemoUploadUploadWithAliyunOssComponent],
  templateUrl  : './zh.html'
})
export default class NzDemoUploadZhComponent {
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
