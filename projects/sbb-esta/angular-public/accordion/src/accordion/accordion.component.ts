import { FocusKeyManager } from '@angular/cdk/a11y';
import { CdkAccordion } from '@angular/cdk/accordion';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { END, HOME } from '@angular/cdk/keycodes';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  HostBinding,
  Input,
  QueryList
} from '@angular/core';

import { ExpansionPanelHeaderComponent } from '../expansion-panel-header/expansion-panel-header.component';

import { IAccordionBase, SBB_ACCORDION } from './accordion-base';

// TODO: Change to directive
@Component({
  selector: 'sbb-accordion',
  exportAs: 'sbbAccordion',
  providers: [
    {
      provide: SBB_ACCORDION,
      useExisting: AccordionComponent
    }
  ],
  template: `
    <ng-content></ng-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent extends CdkAccordion implements IAccordionBase, AfterContentInit {
  private _keyManager: FocusKeyManager<ExpansionPanelHeaderComponent>;
  /**
   * Whether the accordion should allow multiple expanded accordion items.
   */
  @Input() multi = true;

  /**
   * Class property that refers to the headers of the panels of the accordion.
   */
  @ContentChildren(ExpansionPanelHeaderComponent, { descendants: true })
  headers: QueryList<ExpansionPanelHeaderComponent>;

  /** Whether the expansion indicator should be hidden. */
  @Input()
  get hideToggle(): boolean {
    return this._hideToggle;
  }
  set hideToggle(show: boolean) {
    this._hideToggle = coerceBooleanProperty(show);
  }
  private _hideToggle = false;

  /**
   * Class property that refers to the attribute class of the accordion.
   */
  @HostBinding('class.sbb-accordion') sbbAccordionClass = true;

  ngAfterContentInit() {
    this._keyManager = new FocusKeyManager(this.headers).withWrap();
  }

  /** Handles keyboard events coming in from the panel headers. */
  handleHeaderKeydown(event: KeyboardEvent) {
    // tslint:disable-next-line:deprecation
    const { keyCode } = event;
    const manager = this._keyManager;

    if (keyCode === HOME) {
      manager.setFirstItemActive();
      event.preventDefault();
    } else if (keyCode === END) {
      manager.setLastItemActive();
      event.preventDefault();
    } else {
      this._keyManager.onKeydown(event);
    }
  }
  /**
   * Handles a event coming on a header of a panel associated at a specific item.
   */
  handleHeaderFocus(header: ExpansionPanelHeaderComponent) {
    this._keyManager.updateActiveItem(header);
  }
}
