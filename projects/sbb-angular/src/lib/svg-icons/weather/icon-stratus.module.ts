/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-stratus',
  // tslint:disable-next-line:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" [attr.viewBox]="viewBox" [attr.preserveAspectRatio]="preserveAspectRatio" [attr.width]="width" [attr.height]="height" xmlns="http://www.w3.org/2000/svg"><path d="M11 4h5v1h-5zM8 6h9v1H8zM7 8h10v1H7zM6 10h3v1H6zM10 10h9v1h-9zM7 12.005h12v1H7z"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconStratusComponent extends IconBase {
  constructor() {
    super({ viewBox: '0 0 24 24' });
  }
}

@NgModule({
  declarations: [IconStratusComponent],
  exports: [IconStratusComponent],
})
export class IconStratusModule { }
