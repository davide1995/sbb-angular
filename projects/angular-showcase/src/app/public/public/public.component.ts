import { ComponentPortal } from '@angular/cdk/portal';
import { Component, Type } from '@angular/core';

import { ExampleProvider } from '../../shared/example-provider';
import { AccordionShowcaseComponent } from '../public-examples/accordion-showcase/accordion-showcase.component';
import { AutocompleteShowcaseComponent } from '../public-examples/autocomplete-showcase/autocomplete-showcase.component';
import { BadgeShowcaseComponent } from '../public-examples/badge-showcase/badge-showcase.component';
import { BreadcrumbShowcaseComponent } from '../public-examples/breadcrumb-showcase/breadcrumb-showcase.component';
import { ButtonShowcaseComponent } from '../public-examples/button-showcase/button-showcase.component';
import { CaptchaShowcaseComponent } from '../public-examples/captcha-showcase/captcha-showcase.component';
import { CheckboxPanelShowcaseComponent } from '../public-examples/checkbox-panel-showcase/checkbox-panel-showcase.component';
import { CheckboxShowcaseComponent } from '../public-examples/checkbox-showcase/checkbox-showcase.component';
import { DatepickerShowcaseComponent } from '../public-examples/datepicker-showcase/datepicker-showcase.component';
import { DropdownShowcaseComponent } from '../public-examples/dropdown-showcase/dropdown-showcase.component';
import { FieldShowcaseComponent } from '../public-examples/field-showcase/field-showcase.component';
import { FileSelectorShowcaseComponent } from '../public-examples/file-selector-showcase/file-selector-showcase.component';
import { GhettoboxShowcaseComponent } from '../public-examples/ghettobox-showcase/ghettobox-showcase.component';
import { LightboxShowcaseComponent } from '../public-examples/lightbox-showcase/lightbox-showcase.component';
import { LinksShowcaseComponent } from '../public-examples/links-showcase/links-showcase.component';
import { LoadingShowcaseComponent } from '../public-examples/loading-showcase/loading-showcase.component';
import { NotificationShowcaseComponent } from '../public-examples/notification-showcase/notification-showcase.component';
import { PaginationShowcaseComponent } from '../public-examples/pagination-showcase/pagination-showcase.component';
import { ProcessflowShowcaseComponent } from '../public-examples/processflow-showcase/processflow-showcase.component';
import { RadioButtonPanelShowcaseComponent } from '../public-examples/radio-button-panel-showcase/radio-button-panel-showcase.component';
import { RadioButtonShowcaseComponent } from '../public-examples/radio-button-showcase/radio-button-showcase.component';
import { SearchShowcaseComponent } from '../public-examples/search-showcase/search-showcase.component';
import { SelectShowcaseComponent } from '../public-examples/select-showcase/select-showcase.component';
import { TableShowcaseComponent } from '../public-examples/table-showcase/table-showcase.component';
import { TabsShowcaseComponent } from '../public-examples/tabs-showcase/tabs-showcase.component';
import { TagShowcaseComponent } from '../public-examples/tag-showcase/tag-showcase.component';
import { TextareaShowcaseComponent } from '../public-examples/textarea-showcase/textarea-showcase.component';
import { TextexpandShowcaseComponent } from '../public-examples/textexpand-showcase/textexpand-showcase.component';
import { TimeInputShowcaseComponent } from '../public-examples/time-input-showcase/time-input-showcase.component';
import { ToggleShowcaseComponent } from '../public-examples/toggle-showcase/toggle-showcase.component';
import { TooltipShowcaseComponent } from '../public-examples/tooltip-showcase/tooltip-showcase.component';
import { UsermenuShowcaseComponent } from '../public-examples/usermenu-showcase/usermenu-showcase.component';

@Component({
  selector: 'sbb-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss'],
  providers: [{ provide: ExampleProvider, useExisting: PublicComponent }]
})
export class PublicComponent implements ExampleProvider {
  formComponents = {
    autocomplete: 'Autocomplete',
    captcha: 'Captcha',
    checkbox: 'Checkbox',
    'checkbox-panel': 'Checkbox Panel',
    datepicker: 'Datepicker',
    field: 'Field',
    'file-selector': 'File Selector',
    'radio-button': 'Radiobutton',
    'radio-button-panel': 'Radiobutton Panel',
    search: 'Search',
    select: 'Select',
    tag: 'Tag',
    textarea: 'Textarea',
    'time-input': 'Time Input',
    toggle: 'Toggle'
  };
  layoutComponents = {
    accordion: 'Accordion',
    breadcrumb: 'Breadcrumb',
    ghettobox: 'Ghettobox',
    notification: 'Notification',
    pagination: 'Pagination',
    processflow: 'Processflow',
    table: 'Table',
    tabs: 'Tabs',
    textexpand: 'Textexpand',
    usermenu: 'Usermenu'
  };
  buttonAndIndicatorComponents = {
    badge: 'Badge',
    button: 'Button',
    links: 'Links',
    loading: 'Loading'
  };
  popupsAndModals = {
    dropdown: 'Dropdown',
    lightbox: 'Lightbox',
    tooltip: 'Tooltip'
  };
  private _examples: { [component: string]: { [name: string]: ComponentPortal<any> } } = {
    autocomplete: { 'autocomplete-showcase': new ComponentPortal(AutocompleteShowcaseComponent) },
    captcha: { 'captcha-showcase': new ComponentPortal(CaptchaShowcaseComponent) },
    checkbox: { 'checkbox-showcase': new ComponentPortal(CheckboxShowcaseComponent) },
    'checkbox-panel': {
      'checkbox-panel-showcase': new ComponentPortal(CheckboxPanelShowcaseComponent)
    },
    datepicker: { 'datepicker-showcase': new ComponentPortal(DatepickerShowcaseComponent) },
    field: { 'field-showcase': new ComponentPortal(FieldShowcaseComponent) },
    'file-selector': {
      'file-selector-showcase': new ComponentPortal(FileSelectorShowcaseComponent)
    },
    'radio-button': { 'radio-button-showcase': new ComponentPortal(RadioButtonShowcaseComponent) },
    'radio-button-panel': {
      'radio-button-panel-showcase': new ComponentPortal(RadioButtonPanelShowcaseComponent)
    },
    search: { 'search-showcase': new ComponentPortal(SearchShowcaseComponent) },
    select: { 'select-showcase': new ComponentPortal(SelectShowcaseComponent) },
    tag: { 'tag-showcase': new ComponentPortal(TagShowcaseComponent) },
    textarea: { 'textarea-showcase': new ComponentPortal(TextareaShowcaseComponent) },
    'time-input': { 'time-input-showcase': new ComponentPortal(TimeInputShowcaseComponent) },
    toggle: { 'toggle-showcase': new ComponentPortal(ToggleShowcaseComponent) },
    accordion: { 'accordion-showcase': new ComponentPortal(AccordionShowcaseComponent) },
    breadcrumb: { 'breadcrumb-showcase': new ComponentPortal(BreadcrumbShowcaseComponent) },
    ghettobox: { 'ghettobox-showcase': new ComponentPortal(GhettoboxShowcaseComponent) },
    notification: { 'notification-showcase': new ComponentPortal(NotificationShowcaseComponent) },
    pagination: { 'pagination-showcase': new ComponentPortal(PaginationShowcaseComponent) },
    processflow: { 'processflow-showcase': new ComponentPortal(ProcessflowShowcaseComponent) },
    table: { 'table-showcase': new ComponentPortal(TableShowcaseComponent) },
    tabs: { 'tabs-showcase': new ComponentPortal(TabsShowcaseComponent) },
    textexpand: { 'textexpand-showcase': new ComponentPortal(TextexpandShowcaseComponent) },
    usermenu: { 'usermenu-showcase': new ComponentPortal(UsermenuShowcaseComponent) },
    badge: { 'badge-showcase': new ComponentPortal(BadgeShowcaseComponent) },
    button: { 'button-showcase': new ComponentPortal(ButtonShowcaseComponent) },
    links: { 'links-showcase': new ComponentPortal(LinksShowcaseComponent) },
    loading: { 'loading-showcase': new ComponentPortal(LoadingShowcaseComponent) },
    dropdown: { 'dropdown-showcase': new ComponentPortal(DropdownShowcaseComponent) },
    lightbox: { 'lightbox-showcase': new ComponentPortal(LightboxShowcaseComponent) },
    tooltip: { 'tooltip-showcase': new ComponentPortal(TooltipShowcaseComponent) }
  };

  resolveExample<TComponent = any>(
    component: string
  ): { [name: string]: ComponentPortal<TComponent> } {
    return this._examples[component];
  }
}
