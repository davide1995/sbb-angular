/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-railway-ship',
  // tslint:disable:max-line-length
  template: `
    <svg
      focusable="false"
      [attr.class]="'sbb-svg-icon ' + svgClass"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
    >
      <path
        fill="none"
        stroke="#000"
        d="M45.5 29.005V31.5s0 2-3 2h-5l1-6 7 1.505zM28.536 12.624A47.269 47.269 0 0144.5 26.5v2.262M37.833 31.5h-7.689m-5.288 0H22m2.037 5.001H20M28.5 15.5l-2 6h10a34.322 34.322 0 00-8-6zm-.999 15a4 4 0 110 8 4 4 0 010-8zM39 33.5l2.5 3-10.538.001m-14.472-.907a20.172 20.172 0 00-1.99-.094 24.322 24.322 0 00-7.327 1.317M23 17.5h-3.86a2 2 0 00-1.962 1.608l-.199 1a1.999 1.999 0 001.96 2.392H21m-3.535 10.216A19.486 19.486 0 0014.5 32.5c-3.423 0-5.31.814-7.664 1.403L2.5 22.5h11.514l.986-5h-2.5v-6H25M17 40L28 8"
      />
    </svg>
  `,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconRailwayShipComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconRailwayShipComponent],
  exports: [IconRailwayShipComponent]
})
export class IconRailwayShipModule {}
