/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../../icon-base';

@Component({
  selector: 'sbb-icon-him-disruption',
  // tslint:disable-next-line:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" [attr.viewBox]="viewBox" [attr.preserveAspectRatio]="preserveAspectRatio" [attr.width]="width" [attr.height]="height" xmlns="http://www.w3.org/2000/svg"><path d="M4.2 18.1l.6-4.3 1.5 1.6 4.4-5.5-6.9-1.5 5.3-6.5h6.3L7.6 7.8l8 1.8-8.2 6.9 1.5 1.6H4.2z"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconHimDisruptionComponent extends IconBase {
  constructor() {
    super({ viewBox: '0 0 20 20' });
  }
}

@NgModule({
  declarations: [IconHimDisruptionComponent],
  exports: [IconHimDisruptionComponent],
})
export class IconHimDisruptionModule { }
