/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-face-worker',
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
          d="M10.5 13a.5.5 0 11-1 0 .5.5 0 011 0zm4 0a.5.5 0 11-1 0 .5.5 0 011 0zm-5.367 3A3.493 3.493 0 0012 17.5a3.49 3.49 0 002.866-1.5M6.5 9a5.5 5.5 0 1111 0 1.5 1.5 0 001.5 1.5H5A1.5 1.5 0 006.5 9zm0-.5H11m2 0h4.5m-9.743 2a5.5 5.5 0 108.485 0"
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
          d="M15.75 19.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm6 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM13.7 24a5.24 5.24 0 004.3 2.25c1.781 0 3.351-.892 4.3-2.25M9.75 13.5a8.25 8.25 0 0116.5 0 2.25 2.25 0 002.25 2.25h-21a2.249 2.249 0 002.25-2.25zm0-.75h6.75m3 0h6.75m-14.614 3A8.21 8.21 0 009.75 21a8.25 8.25 0 1014.613-5.25"
        />
      </svg>
    </ng-container>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconFaceWorkerComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconFaceWorkerComponent],
  exports: [IconFaceWorkerComponent]
})
export class IconFaceWorkerModule {}
