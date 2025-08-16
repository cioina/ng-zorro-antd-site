/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

import { ElementSelectorUpgradeData, TargetVersion, VersionChanges } from '@angular/cdk/schematics';

export const elementSelectors: VersionChanges<ElementSelectorUpgradeData> = {
  [TargetVersion.V20]: [{
    pr: 'https://github.com/NG-ZORRO/ng-zorro-antd/pull/9238',
    changes: [{
      replace: 'nz-tabset',
      replaceWith: 'nz-tabs'
    }]
  }]
};
