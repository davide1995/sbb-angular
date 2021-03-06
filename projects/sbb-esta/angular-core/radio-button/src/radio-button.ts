import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import {
  AfterViewInit,
  ChangeDetectorRef,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { HasTabIndexCtor, mixinTabIndex } from '@sbb-esta/angular-core/common-behaviors';

import { RadioGroupDirective } from './radio-group.directive';

/** Change event object emitted by RadioButtonComponent. */
export class RadioChange {
  constructor(
    /** The RadioButtonComponent that emits the change event. */
    public source: RadioButton,
    /** The value of the RadioButtonComponent. */
    public value: any
  ) {}
}

class RadioButtonBase {
  // Since the disabled property is manually defined for the MatRadioButton and isn't set up in
  // the mixin base class. To be able to use the tabindex mixin, a disabled property must be
  // defined to properly work.
  disabled: boolean;
}

// tslint:disable-next-line: naming-convention
const _RadioButtonMixinBase: HasTabIndexCtor & typeof RadioButtonBase = mixinTabIndex(
  RadioButtonBase
);

let nextUniqueId = 0;

export class RadioButton extends _RadioButtonMixinBase
  implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy {
  private _uniqueId = `sbb-radio-button-${++nextUniqueId}`;

  /** The id of this component. */
  // tslint:disable-next-line: no-input-rename
  @Input() @HostBinding('attr.id') id: string = this._uniqueId;
  /** Radio input identifier. */
  @Input() inputId = `${this.id}-input`;
  /** Analog to HTML 'name' attribute used to group radios for unique selection. */
  @Input() name: string;
  /** Used to set the 'aria-label' attribute on the underlying input element. */
  @Input('aria-label') ariaLabel: string;
  /** @docs-private */
  @HostBinding('attr.aria-label') _ariaLabelAttr = null;
  /** The 'aria-labelledby' attribute takes precedence as the element's text alternative. */
  @Input('aria-labelledby') ariaLabelledby: string;
  /** @docs-private */
  @HostBinding('attr.aria-labelledby') _arialabelledbyAttr = null;
  /** The 'aria-describedby' attribute is read after the element's label and field type. */
  @Input('aria-describedby') ariaDescribedby: string;
  /** @docs-private */
  @HostBinding('attr.aria-describedby') _ariadescribedbyAttr = null;
  /** @docs-private */
  @HostBinding('class.sbb-radio-button') _cssClass = true;

  /**
   * Needs to be -1 so the `focus` event still fires.
   * @docs-private
   */
  @HostBinding('attr.tabindex') _tabIndexAttr = -1;

  /** Whether this radio button is checked. */
  @Input()
  get checked(): boolean {
    return this._checked;
  }
  set checked(value: boolean) {
    const newCheckedState = coerceBooleanProperty(value);
    if (this._checked !== newCheckedState) {
      this._checked = newCheckedState;
      if (newCheckedState && this.radioGroup && this.radioGroup.value !== this.value) {
        this.radioGroup.selected = this;
      } else if (!newCheckedState && this.radioGroup && this.radioGroup.value === this.value) {
        // When unchecking the selected radio button, update the selected radio
        // property on the group.
        this.radioGroup.selected = null;
      }

      if (newCheckedState) {
        // Notify all radio buttons with the same name to un-check.
        this._radioDispatcher.notify(this.id, this.name);
        // TODO: Remove this after dropping support for form
        // control on radio button (instead of radio group).
        this.onChange(this.value);
      }
      this._changeDetector.markForCheck();
    }
  }

  /** The value of this radio button. */
  @Input()
  get value(): any {
    return this._value;
  }
  set value(value: any) {
    if (this._value !== value) {
      this._value = value;
      if (this.radioGroup !== null) {
        if (!this.checked) {
          // Update checked when the value changed to match the radio group's value
          this.checked = this.radioGroup.value === value;
        }
        if (this.checked) {
          this.radioGroup.selected = this;
        }
      }
    }
  }

  /** Whether the radio button is disabled. */
  @Input()
  get disabled(): boolean {
    return this._disabled || (this.radioGroup !== null && this.radioGroup.disabled);
  }
  set disabled(value: boolean) {
    const newDisabledState = coerceBooleanProperty(value);
    if (this._disabled !== newDisabledState) {
      this._disabled = newDisabledState;
      this._changeDetector.markForCheck();
    }
  }

  /** Whether the radio button is required. */
  @Input()
  get required(): boolean {
    return this._required || (this.radioGroup && this.radioGroup.required);
  }
  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
  }

  /**
   * Indicates radio button name in formControl.
   * @deprecated
   */
  @Input() formControlName: string;
  /**
   * @docs-private
   * @deprecated
   */
  _control: NgControl;

  /**
   * Event emitted when the checked state of this radio button changes.
   * Change events are only emitted when the value changes due to user interaction with
   * the radio button (the same behavior as `<input type-"radio">`).
   */
  @Output() readonly change: EventEmitter<RadioChange> = new EventEmitter<RadioChange>();

  /** The native `<input type=radio>` element */
  @ViewChild('input', { static: false }) _inputElement: ElementRef<HTMLInputElement>;

  private _disabled = false;
  private _required = false;
  private _checked = false;
  private _value: any = null;

  /** Unregister function for _radioDispatcher */
  private _removeUniqueSelectionListener: () => void = () => {};

  /**
   * Class property that represents a change on the radio button
   * @docs-private
   * @deprecated
   */
  onChange = (_: any) => {};
  /**
   * Class property that represents a touch on the radio button
   * @docs-private
   * @deprecated
   */
  onTouched = () => {};

  constructor(
    readonly radioGroup: RadioGroupDirective,
    protected readonly _changeDetector: ChangeDetectorRef,
    private _elementRef: ElementRef,
    private _focusMonitor: FocusMonitor,
    private _radioDispatcher: UniqueSelectionDispatcher
  ) {
    super();
    this._removeUniqueSelectionListener = _radioDispatcher.listen((id: string, name: string) => {
      if (id !== this.id && name === this.name) {
        this.checked = false;
      }
    });
  }

  /** Focuses the radio button. */
  focus(options?: FocusOptions): void {
    this._focusMonitor.focusVia(this._inputElement, 'keyboard', options);
  }

  /**
   * Note: under normal conditions focus shouldn't land on this element, however it may be
   * programmatically set, for example inside of a focus trap, in this case we want to forward
   * the focus to the native element.
   * @docs-private
   */
  @HostListener('focus')
  _forwardFocus() {
    this._inputElement.nativeElement.focus();
  }

  /**
   * Marks the radio button as needing checking for change detection.
   * This method is exposed because the parent radio group will directly
   * update bound properties of the radio button.
   * @docs-private
   */
  _markForCheck() {
    // When group value changes, the button will not be notified. Use `markForCheck` to explicit
    // update radio button's status
    this._changeDetector.markForCheck();
  }

  ngOnInit(): void {
    if (this.radioGroup && this.formControlName) {
      throw new Error('The form control should be applied to the sbb-radio-group');
    } else if (this.radioGroup) {
      // If the radio is inside a radio group, determine if it should be checked
      this.checked = this.radioGroup.value === this._value;
      // Copy name from parent radio group
      this.name = this.radioGroup.name;
    } else {
      this._checkName();
    }
  }

  ngAfterViewInit() {
    this._focusMonitor.monitor(this._elementRef, true).subscribe(focusOrigin => {
      if (!focusOrigin) {
        this.onTouched();
      }
      if (!focusOrigin && this.radioGroup) {
        this.radioGroup._touch();
      }
    });
  }

  ngOnDestroy(): void {
    this._focusMonitor.stopMonitoring(this._elementRef);
    this._removeUniqueSelectionListener();
  }

  /**
   * @docs-private
   * @deprecated
   */
  writeValue(value: any): void {
    this.checked = this.value === value;
  }

  /**
   * Registers the on change callback
   * @docs-private
   * @deprecated
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * Registers the on touched callback
   * @docs-private
   * @deprecated
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   * Manage the event click on the radio button
   * @deprecated Use .checked
   */
  click($event: Event) {
    this.checked = true;
  }

  /**
   * Sets the radio button status to disabled
   * @docs-private
   * @deprecated
   */
  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
    this._changeDetector.markForCheck();
  }

  /**
   * Unchecks the radio button
   * @deprecated Use .checked
   */
  uncheck() {
    this.checked = false;
  }

  /** @docs-private */
  _onInputClick(event: Event) {
    // We have to stop propagation for click events on the visual hidden input element.
    // By default, when a user clicks on a label element, a generated click event will be
    // dispatched on the associated input element. Since we are using a label element as our
    // root container, the click event on the `radio-button` will be executed twice.
    // The real click event will bubble up, and the generated click event also tries to bubble up.
    // This will lead to multiple click events.
    // Preventing bubbling for the second event will solve that issue.
    event.stopPropagation();
  }

  /**
   * Triggered when the radio button received a click or the input recognized any change.
   * Clicking on a label element, will trigger a change event on the associated input.
   * @docs-private
   */
  _onInputChange(event: Event) {
    // We always have to stop propagation on the change event.
    // Otherwise the change event, from the input element, will bubble up and
    // emit its event object to the `change` output.
    event.stopPropagation();

    const groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
    this.checked = true;
    this._emitChangeEvent();

    if (this.radioGroup) {
      this.radioGroup._controlValueAccessorChangeFn(this.value);
      if (groupValueChanged) {
        this.radioGroup._emitChangeEvent();
      }
    }
  }

  /**
   * Verify that radio button name matches with radio button form control name
   */
  private _checkName(): void {
    if (this.name && this.formControlName && this.name !== this.formControlName) {
      this._throwNameError();
    } else if (!this.name && this.formControlName) {
      this.name = this.formControlName;
    }
  }

  /**
   * Throws an exception if the radio button name doesn't match with the radio button form control name
   */
  private _throwNameError(): void {
    throw new Error(`
    If you define both a name and a formControlName attribute on your radio button, their values
    must match. Ex: <sbb-radio-button formControlName="food" name="food"></sbb-radio-button>
  `);
  }

  /** Dispatch change event with current value. */
  private _emitChangeEvent(): void {
    this.change.emit(new RadioChange(this, this.value));
  }
}
