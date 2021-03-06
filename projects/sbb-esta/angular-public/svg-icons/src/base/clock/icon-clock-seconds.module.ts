/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../../icon-base';

/** @deprecated Use `@sbb-esta/angular-icons` instead. */
@Component({
  selector: 'sbb-icon-clock-seconds',
  // tslint:disable-next-line
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 226 226"><path d="M123.4 51.1c0-5.7-4.7-10.4-10.4-10.4s-10.4 4.7-10.4 10.4c0 5.3 3.9 9.6 9 10.3v84.3h2.8V61.4c5-.6 9-5 9-10.3z"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconClockSecondsComponent extends IconBase {
  constructor() {
    super({ width: '226px', height: '226px', ratio: 1 });
  }
}

/** @deprecated Use `@sbb-esta/angular-icons` instead. */
@NgModule({
  declarations: [IconClockSecondsComponent],
  exports: [IconClockSecondsComponent]
})
export class IconClockSecondsModule {}
