/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-arrow-thick',
  // tslint:disable-next-line:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.57 7.035l3.58 3.7H4v1.488h13.15l-3.58 3.7 1.073 1.034 5.3-5.478L14.642 6z"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconArrowThickComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  declarations: [IconArrowThickComponent],
  exports: [IconArrowThickComponent],
})
export class IconArrowThickModule { }