/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../../icon-base';

@Component({
  selector: 'sbb-icon-service-sh',
  // tslint:disable-next-line:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" [attr.viewBox]="viewBox" [attr.preserveAspectRatio]="preserveAspectRatio" [attr.width]="width" [attr.height]="height" xmlns="http://www.w3.org/2000/svg"><path d="M9.2 2.6C8.4 2.3 7.5 2 6.6 2c-.9 0-2.1.3-2.1 1.4 0 2 4.3 1.9 4.3 5.4 0 3.1-2.4 4.2-5.2 4.2-1.2 0-2.4-.3-3.6-.7l.6-2.1c1 .5 2 .9 3.1.9 1.2 0 2.4-.6 2.4-2 0-2.3-4.3-1.9-4.3-5.3C1.8 1.2 4.1 0 6.5 0c1.1 0 2.2.1 3.3.6l-.6 2zM13 .2h2.5l-1.1 5.1h5.1L20.6.2h2.5l-2.6 12.6H18l1.2-5.5h-5.1l-1.2 5.5h-2.5"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconServiceShComponent extends IconBase {
  constructor() {
    super({ viewBox: '0 0 24 13' });
  }
}

@NgModule({
  declarations: [IconServiceShComponent],
  exports: [IconServiceShComponent],
})
export class IconServiceShModule { }
