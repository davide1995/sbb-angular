/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-product-pe',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 59 20"
    >
      <g fill="none" fill-rule="evenodd">
        <rect width="59" height="20" fill="#EB0000" rx="2" />
        <path
          fill="#FFF"
          d="M7.002 9.378h.745c1.275 0 2.127-.08 2.554-.24a2.09 2.09 0 001.009-.769c.246-.352.368-.74.368-1.16 0-.284-.063-.516-.188-.697a1.066 1.066 0 00-.528-.397c-.227-.083-.733-.124-1.518-.124h-1.73l-.712 3.387zm-1.338 6.423H3.246L5.705 4.06h4.772c.849 0 1.52.1 2.014.3.494.2.885.532 1.173.993.289.462.433 1.013.433 1.654 0 .593-.115 1.17-.345 1.73-.23.56-.511 1.009-.844 1.345a3.616 3.616 0 01-1.077.765c-.385.173-.903.305-1.554.396-.38.054-1.089.08-2.13.08H6.601l-.937 4.477zM13.602 15.801l2.451-11.74h8.704l-.408 1.962h-6.286l-.561 2.667h6.078l-.408 1.962h-6.078l-.737 3.187h6.831l-.417 1.962z"
        />
      </g>
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconProductPeComponent extends IconBase {
  constructor() {
    super({ width: '59px', height: '20px', ratio: 2.95 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconProductPeComponent],
  exports: [IconProductPeComponent]
})
export class IconProductPeModule {}
