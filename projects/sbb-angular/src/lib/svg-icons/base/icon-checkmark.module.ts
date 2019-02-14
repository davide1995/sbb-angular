/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-checkmark',
  // tslint:disable-next-line:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.36 15.57L7.18 12.6l-.82.91 4.13 4.13 7.15-10.43-.83-.85-6.45 9.21"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCheckmarkComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  declarations: [IconCheckmarkComponent],
  exports: [IconCheckmarkComponent],
})
export class IconCheckmarkModule { }
