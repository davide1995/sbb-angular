import { FocusMonitor } from '@angular/cdk/a11y';
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  Input,
  Optional,
  ViewEncapsulation
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { RadioButton, RadioGroupDirective } from '@sbb-esta/angular-core/radio-button';
import { RadioButtonComponent } from '@sbb-esta/angular-public/radio-button';

// TODO: Inherit directly from RadioButton
@Component({
  selector: 'sbb-radio-button-panel',
  templateUrl: './radio-button-panel.component.html',
  styleUrls: ['./radio-button-panel.component.scss'],
  inputs: ['tabIndex'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioButtonPanelComponent),
      multi: true
    },
    { provide: RadioButton, useExisting: RadioButtonPanelComponent }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class RadioButtonPanelComponent extends RadioButtonComponent {
  /** Label of a radio button panel. */
  @Input()
  label: string;
  /** Subtitle of a radio button panel. */
  @Input()
  subtitle?: string;

  /**
   * Returns the subtitle of a radio button panel.
   * @deprecated Check .subtitle
   */
  get hasSubtitle() {
    return !!this.subtitle;
  }

  constructor(
    @Optional() radioGroup: RadioGroupDirective,
    changeDetector: ChangeDetectorRef,
    elementRef: ElementRef,
    focusMonitor: FocusMonitor,
    radioDispatcher: UniqueSelectionDispatcher
  ) {
    super(radioGroup, changeDetector, elementRef, focusMonitor, radioDispatcher);
  }
}
