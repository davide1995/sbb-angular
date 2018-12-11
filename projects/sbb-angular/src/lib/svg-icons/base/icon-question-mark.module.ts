/*
 * Don't delete this file, it's autogenerated by the ACL icons build script
 */
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-question-mark',
  // tslint:disable-next-line:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" [attr.viewBox]="viewBox" [attr.preserveAspectRatio]="preserveAspectRatio" [attr.width]="width" [attr.height]="height" xmlns="http://www.w3.org/2000/svg"><path d="M12 16h1v2h-1v-2zm.5-11C10.6 5 9 6.6 9 8.5V9h1v-.5C10 7.1 11.1 6 12.5 6S15 7.1 15 8.5c0 .5-.4 1-1 1.5l-1 1c-1 1.1-1 3-1 3h1c0-.4.2-1.6.8-2.3l.9-.9c.7-.7 1.3-1.3 1.3-2.2 0-2-1.6-3.6-3.5-3.6z"/></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconQuestionMarkComponent extends IconBase {
  constructor() {
    super({ viewBox: '0 0 24 24' });
  }
}

@NgModule({
  declarations: [IconQuestionMarkComponent],
  exports: [IconQuestionMarkComponent],
})
export class IconQuestionMarkModule { }
