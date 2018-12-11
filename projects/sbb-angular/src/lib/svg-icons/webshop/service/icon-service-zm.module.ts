/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../../icon-base';

@Component({
  selector: 'sbb-icon-service-zm',
  // tslint:disable-next-line:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" [attr.viewBox]="viewBox" [attr.preserveAspectRatio]="preserveAspectRatio" [attr.width]="width" [attr.height]="height" xmlns="http://www.w3.org/2000/svg"><path d="M3 0h8.9l-.4 2-7.9 9h5.9l-.4 2H0l.4-2 7.8-9H2.6m11.3-2h4.3l.9 9.4L24.3 0h4.3l-2.8 13H23l2.5-10.8L19.6 13h-2.5l-1-10.8L13.6 13h-2.5"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconServiceZmComponent extends IconBase {
  constructor() {
    super({ viewBox: '0 0 29 13' });
  }
}

@NgModule({
  declarations: [IconServiceZmComponent],
  exports: [IconServiceZmComponent],
})
export class IconServiceZmModule { }
