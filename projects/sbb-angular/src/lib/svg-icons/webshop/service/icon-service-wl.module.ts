/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../../icon-base';

@Component({
  selector: 'sbb-icon-service-wl',
  // tslint:disable-next-line:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" [attr.viewBox]="viewBox" [attr.preserveAspectRatio]="preserveAspectRatio" [attr.width]="width" [attr.height]="height" xmlns="http://www.w3.org/2000/svg"><path d="M20.9 13h-2V8.5H2V13H0V0h.9c.4 0 1 .2 1.7.8.7.5 1.3 1.1 1.8 1.7.5.7.9 1.3 1.1 2 .2.6.4 1.3.4 2h2c0-1.4.5-2.7 1.4-3.6.9-.9 2.1-1.6 3.5-1.6h8.3L20.9 13"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconServiceWlComponent extends IconBase {
  constructor() {
    super({ viewBox: '0 0 21 13' });
  }
}

@NgModule({
  declarations: [IconServiceWlComponent],
  exports: [IconServiceWlComponent],
})
export class IconServiceWlModule { }
