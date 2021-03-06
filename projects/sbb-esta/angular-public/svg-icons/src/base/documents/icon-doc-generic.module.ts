/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../../icon-base';

/** @deprecated Use `@sbb-esta/angular-icons` instead. */
@Component({
  selector: 'sbb-icon-doc-generic',
  // tslint:disable-next-line
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#000" fill-rule="evenodd" d="M7 19V5h5v5h5v9H7zm6-13.293L16.293 9H13V5.707zM12.707 4H6v16h12V9.293L12.707 4z"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconDocGenericComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

/** @deprecated Use `@sbb-esta/angular-icons` instead. */
@NgModule({
  declarations: [IconDocGenericComponent],
  exports: [IconDocGenericComponent]
})
export class IconDocGenericModule {}
