/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../../icon-base';

@Component({
  selector: 'sbb-icon-utilization-medium',
  // tslint:disable-next-line:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 18"><path d="M6 5H1v6h1v6h3v-6h1V5z"/><circle cx="3.5" cy="2.5" r="1.5"/><path d="M13 5H8v6h1v6h3v-6h1V5z"/><circle cx="10.5" cy="2.5" r="1.5"/><path fill="#BCBCBC" d="M20 5h-5v6h1v6h3v-6h1V5z"/><circle cx="17.5" cy="2.5" r="1.5" fill="#BCBCBC"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconUtilizationMediumComponent extends IconBase {
  constructor() {
    super({ width: '21px', height: '18px', ratio: 1.1666666666666667 });
  }
}

@NgModule({
  declarations: [IconUtilizationMediumComponent],
  exports: [IconUtilizationMediumComponent],
})
export class IconUtilizationMediumModule { }
