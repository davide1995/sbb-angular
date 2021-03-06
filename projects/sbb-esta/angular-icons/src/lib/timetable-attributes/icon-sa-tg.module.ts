/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-sa-tg',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 16"
    >
      <g fill="#000" fill-rule="evenodd">
        <path
          d="M3.16 1.037h10.782l-.46 2.2h-3.94L7.001 15h-2.92l2.54-11.763h-3.94zM25.943 3.998c-1.08-.7-2.42-1.001-3.88-1.001-3.402 0-5.542 2.661-5.542 5.962 0 2.26 1.56 4.081 3.941 4.081.64 0 1.06 0 1.38-.141l.78-3.7h-2.96l.46-2.201h5.661l-1.6 7.622c-.82.34-2.382.62-3.742.62-4.1 0-6.84-1.881-6.84-6.201 0-5.102 3.34-8.242 8.381-8.242 1.561 0 3.2.22 4.661.78l-.7 2.421z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconSaTgComponent extends IconBase {
  constructor() {
    super({ width: '28px', height: '16px', ratio: 1.75 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconSaTgComponent],
  exports: [IconSaTgComponent]
})
export class IconSaTgModule {}
