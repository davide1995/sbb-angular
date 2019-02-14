/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../../icon-base';

@Component({
  selector: 'sbb-icon-oev-b-t10',
  // tslint:disable-next-line:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M3.4 7.5l1.1 1.7L8.4 9l-.9-6.5H9l2.2 6.6h5.3c.5 0 .9.4.9.9s-.4.9-.9.9h-5.3L9 17.5H7.5l.9-6.6-3.9-.1-1.1 1.7h-.9l.6-2.5-.6-2.5h.9z"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconOevBT10Component extends IconBase {
  constructor() {
    super({ width: '20px', height: '20px', ratio: 1 });
  }
}

@NgModule({
  declarations: [IconOevBT10Component],
  exports: [IconOevBT10Component],
})
export class IconOevBT10Module { }
