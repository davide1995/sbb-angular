/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../../icon-base';

@Component({
  selector: 'sbb-icon-service-sv',
  // tslint:disable-next-line:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 13"><path d="M9.2 2.6C8.4 2.3 7.5 2 6.6 2c-.9 0-2.1.3-2.1 1.4 0 2 4.3 1.9 4.3 5.4 0 3.1-2.4 4.2-5.2 4.2-1.2 0-2.4-.3-3.6-.7l.6-2.1c1 .5 2 .9 3.1.9 1.2 0 2.4-.6 2.4-2 0-2.3-4.3-1.9-4.3-5.3C1.8 1.2 4.1 0 6.5 0c1.1 0 2.2.1 3.3.6l-.6 2zM11.8.2h2.5l1.2 9.8L20.7.2h2.7l-7 12.6h-3"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconServiceSvComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '13px', ratio: 1.8461538461538463 });
  }
}

@NgModule({
  declarations: [IconServiceSvComponent],
  exports: [IconServiceSvComponent],
})
export class IconServiceSvModule { }
