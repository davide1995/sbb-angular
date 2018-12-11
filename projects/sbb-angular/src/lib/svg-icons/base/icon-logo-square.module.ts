/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-logo-square',
  // tslint:disable-next-line:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" [attr.viewBox]="viewBox" [attr.preserveAspectRatio]="preserveAspectRatio" [attr.width]="width" [attr.height]="height" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#EB0000" d="M0 0h32v32H0"/><path fill="#FFF" d="M8.32 24h4.468l-6.012-6.148h7.462V24h3.526v-6.148h7.46L19.213 24h4.468l7.653-7.988L23.68 8h-4.468l6.013 6.173h-7.46V8h-3.527v6.173H6.776L12.788 8H8.32L.668 16.012 8.32 24"/></g></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLogoSquareComponent extends IconBase {
  constructor() {
    super({ viewBox: '0 0 32 32' });
  }
}

@NgModule({
  declarations: [IconLogoSquareComponent],
  exports: [IconLogoSquareComponent],
})
export class IconLogoSquareModule { }
