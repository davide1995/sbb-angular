import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  QueryList
} from '@angular/core';
import { ProcessflowBase } from '@sbb-esta/angular-core/base';

import { ProcessflowStepComponent } from '../processflow-step/processflow-step.component';

@Component({
  selector: 'sbb-processflow',
  templateUrl: './processflow.component.html',
  styleUrls: ['./processflow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProcessflowComponent extends ProcessflowBase<ProcessflowStepComponent> {
  /** @docs-private */
  @ContentChildren(ProcessflowStepComponent)
  steps: QueryList<ProcessflowStepComponent>;

  constructor(changeDetectorRef: ChangeDetectorRef) {
    super(changeDetectorRef);
  }
}
