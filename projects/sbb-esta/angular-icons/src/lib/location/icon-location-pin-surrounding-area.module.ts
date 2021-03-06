/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-location-pin-surrounding-area',
  // tslint:disable:max-line-length
  template: `
    <ng-container [ngSwitch]="size">
      <svg
        *ngSwitchDefault
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="#000"
          d="M15.508 8.007a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm1.992.008a5.5 5.5 0 00-11 0c.037.943.316 1.737.766 2.486l4.75 7.498 4.75-7.498c.443-.777.726-1.585.734-2.486zm-8.698 7.66C5.119 16.092 2.5 17.207 2.5 18.5c0 1.644 4.232 3 9.5 3 5.269 0 9.5-1.356 9.5-3 0-1.283-2.58-2.391-6.218-2.815"
        />
      </svg>
      <svg
        *ngSwitchCase="size?.indexOf('medium') === 0 ? size : ''"
        focusable="false"
        [attr.class]="'sbb-svg-icon ' + svgClass"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
      >
        <path
          fill="none"
          stroke="#000"
          d="M23.262 12.01a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0zm2.988.012a8.25 8.25 0 00-16.5 0c.056 1.414.474 2.605 1.149 3.729l7.125 11.247 7.125-11.247c.665-1.166 1.089-2.378 1.101-3.73zm-13.047 11.49c-5.525.626-9.453 2.298-9.453 4.238 0 2.466 6.348 4.5 14.25 4.5 7.903 0 14.25-2.034 14.25-4.5 0-1.925-3.87-3.587-9.327-4.223"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconLocationPinSurroundingAreaComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconLocationPinSurroundingAreaComponent],
  exports: [IconLocationPinSurroundingAreaComponent]
})
export class IconLocationPinSurroundingAreaModule {}
