/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../../icon-base';

@Component({
  selector: 'sbb-icon-service-xr',
  // tslint:disable-next-line:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" [attr.viewBox]="viewBox" [attr.preserveAspectRatio]="preserveAspectRatio" [attr.width]="width" [attr.height]="height" xmlns="http://www.w3.org/2000/svg"><path d="M6 0l1.9 4.5L11.5 0h3.1L9.2 6.2l3 6.8H9.3l-2-5.2L3.2 13H0l6-7.1L3.2 0m14.6 5.5h.9c1.4 0 3.1-.4 3.1-2.1C21.9 2 20.7 2 19.6 2h-1.1l-.7 3.5zM16.3 0h3.1c2.4 0 5.2 0 5.2 3.1 0 2.2-1.7 3.4-3.8 3.5.7 0 1.2.5 1.3 1.2l1.2 5.2h-2.7L20 9.9c-.3-1.4-.2-2.3-1.6-2.3h-1L16.2 13h-2.6l2.7-13z"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconServiceXrComponent extends IconBase {
  constructor() {
    super({ viewBox: '0 0 25 13' });
  }
}

@NgModule({
  declarations: [IconServiceXrComponent],
  exports: [IconServiceXrComponent],
})
export class IconServiceXrModule { }
