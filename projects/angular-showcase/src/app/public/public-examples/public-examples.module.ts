import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { IconCollectionModule } from '@sbb-esta/angular-icons';
import { AccordionModule } from '@sbb-esta/angular-public/accordion';
import { AutocompleteModule } from '@sbb-esta/angular-public/autocomplete';
import { BadgeModule } from '@sbb-esta/angular-public/badge';
import { BreadcrumbModule } from '@sbb-esta/angular-public/breadcrumb';
import { ButtonModule } from '@sbb-esta/angular-public/button';
import { CaptchaModule } from '@sbb-esta/angular-public/captcha';
import { CheckboxModule } from '@sbb-esta/angular-public/checkbox';
import { CheckboxPanelModule } from '@sbb-esta/angular-public/checkbox-panel';
import { DatepickerModule } from '@sbb-esta/angular-public/datepicker';
import { DropdownModule } from '@sbb-esta/angular-public/dropdown';
import { FieldModule } from '@sbb-esta/angular-public/field';
import { FileSelectorModule } from '@sbb-esta/angular-public/file-selector';
import { GhettoboxModule } from '@sbb-esta/angular-public/ghettobox';
import { LightboxModule } from '@sbb-esta/angular-public/lightbox';
import { LinksModule } from '@sbb-esta/angular-public/links';
import { LoadingModule } from '@sbb-esta/angular-public/loading';
import { NotificationsModule } from '@sbb-esta/angular-public/notification';
import { OptionModule } from '@sbb-esta/angular-public/option';
import { PaginationModule } from '@sbb-esta/angular-public/pagination';
import { ProcessflowModule } from '@sbb-esta/angular-public/processflow';
import { RadioButtonModule } from '@sbb-esta/angular-public/radio-button';
import { RadioButtonPanelModule } from '@sbb-esta/angular-public/radio-button-panel';
import { SearchModule } from '@sbb-esta/angular-public/search';
import { SelectModule } from '@sbb-esta/angular-public/select';
import { TableModule } from '@sbb-esta/angular-public/table';
import { TabsModule } from '@sbb-esta/angular-public/tabs';
import { TagModule } from '@sbb-esta/angular-public/tag';
import { TextareaModule } from '@sbb-esta/angular-public/textarea';
import { TextexpandModule } from '@sbb-esta/angular-public/textexpand';
import { TimeInputModule } from '@sbb-esta/angular-public/time-input';
import { ToggleModule } from '@sbb-esta/angular-public/toggle';
import { TooltipModule } from '@sbb-esta/angular-public/tooltip';
import { UserMenuModule } from '@sbb-esta/angular-public/usermenu';
import { MonacoEditorModule } from 'ngx-monaco-editor';

import { AccordionShowcaseComponent } from './accordion-showcase/accordion-showcase.component';
import { AutocompleteShowcaseComponent } from './autocomplete-showcase/autocomplete-showcase.component';
import { BadgeShowcaseComponent } from './badge-showcase/badge-showcase.component';
import { BreadcrumbShowcaseComponent } from './breadcrumb-showcase/breadcrumb-showcase.component';
import { ButtonShowcaseComponent } from './button-showcase/button-showcase.component';
import { CaptchaShowcaseComponent } from './captcha-showcase/captcha-showcase.component';
import { CheckboxPanelShowcaseComponent } from './checkbox-panel-showcase/checkbox-panel-showcase.component';
import { CheckboxShowcaseComponent } from './checkbox-showcase/checkbox-showcase.component';
import { DatepickerShowcaseComponent } from './datepicker-showcase/datepicker-showcase.component';
import { DropdownShowcaseComponent } from './dropdown-showcase/dropdown-showcase.component';
import { FieldShowcaseComponent } from './field-showcase/field-showcase.component';
import { FileSelectorShowcaseComponent } from './file-selector-showcase/file-selector-showcase.component';
import { GhettoboxShowcaseComponent } from './ghettobox-showcase/ghettobox-showcase.component';
import {
  LightboxShowcaseComponent,
  LightboxShowcaseExample2Component,
  LightboxShowcaseExample2ContentComponent,
  LightboxShowcaseExample3Component,
  LightboxShowcaseExample4Component,
  LightboxShowcaseExample4ContentComponent,
  LightboxShowcaseExample5Component,
  LightboxShowcaseExample5ContentComponent,
  LightboxShowcaseExample6ContentComponent,
  LightboxShowcaseExampleComponent,
  LightboxShowcaseExampleContentComponent
} from './lightbox-showcase/lightbox-showcase.component';
import { LinksShowcaseComponent } from './links-showcase/links-showcase.component';
import { LoadingShowcaseComponent } from './loading-showcase/loading-showcase.component';
import { NotificationShowcaseComponent } from './notification-showcase/notification-showcase.component';
import { PaginationShowcaseComponent } from './pagination-showcase/pagination-showcase.component';
import { ProcessflowShowcaseComponent } from './processflow-showcase/processflow-showcase.component';
import { RadioButtonPanelShowcaseComponent } from './radio-button-panel-showcase/radio-button-panel-showcase.component';
import { RadioButtonShowcaseComponent } from './radio-button-showcase/radio-button-showcase.component';
import { SearchShowcaseComponent } from './search-showcase/search-showcase.component';
import { SelectShowcaseComponent } from './select-showcase/select-showcase.component';
import { TableShowcaseComponent } from './table-showcase/table-showcase.component';
import { PersonListComponent } from './tabs-showcase/person/person-list/person-list.component';
import { TabsShowcaseComponent } from './tabs-showcase/tabs-showcase.component';
import { TagShowcaseComponent } from './tag-showcase/tag-showcase.component';
import { TextareaShowcaseComponent } from './textarea-showcase/textarea-showcase.component';
import { TextexpandShowcaseComponent } from './textexpand-showcase/textexpand-showcase.component';
import { TimeInputShowcaseComponent } from './time-input-showcase/time-input-showcase.component';
import { ToggleShowcaseComponent } from './toggle-showcase/toggle-showcase.component';
import { TooltipShowcaseComponent } from './tooltip-showcase/tooltip-showcase.component';
import { UsermenuShowcaseComponent } from './usermenu-showcase/usermenu-showcase.component';

const exampleComponents = [
  AccordionShowcaseComponent,
  AutocompleteShowcaseComponent,
  BadgeShowcaseComponent,
  BreadcrumbShowcaseComponent,
  ButtonShowcaseComponent,
  CaptchaShowcaseComponent,
  CheckboxPanelShowcaseComponent,
  CheckboxShowcaseComponent,
  DatepickerShowcaseComponent,
  DropdownShowcaseComponent,
  FieldShowcaseComponent,
  FileSelectorShowcaseComponent,
  GhettoboxShowcaseComponent,
  LightboxShowcaseComponent,
  LightboxShowcaseExampleComponent,
  LightboxShowcaseExampleContentComponent,
  LightboxShowcaseExample2Component,
  LightboxShowcaseExample2ContentComponent,
  LightboxShowcaseExample3Component,
  LightboxShowcaseExample4Component,
  LightboxShowcaseExample4ContentComponent,
  LightboxShowcaseExample5Component,
  LightboxShowcaseExample5ContentComponent,
  LightboxShowcaseExample6ContentComponent,
  LinksShowcaseComponent,
  LoadingShowcaseComponent,
  NotificationShowcaseComponent,
  PaginationShowcaseComponent,
  PersonListComponent,
  ProcessflowShowcaseComponent,
  RadioButtonPanelShowcaseComponent,
  RadioButtonShowcaseComponent,
  SearchShowcaseComponent,
  SelectShowcaseComponent,
  TableShowcaseComponent,
  TabsShowcaseComponent,
  TextareaShowcaseComponent,
  TextexpandShowcaseComponent,
  TimeInputShowcaseComponent,
  ToggleShowcaseComponent,
  TooltipShowcaseComponent,
  TagShowcaseComponent,
  UsermenuShowcaseComponent
];

@NgModule({
  declarations: exampleComponents,
  entryComponents: exampleComponents,
  exports: exampleComponents,
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MonacoEditorModule.forRoot(),
    IconCollectionModule,
    AccordionModule,
    AutocompleteModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonModule,
    CaptchaModule,
    CheckboxModule,
    CheckboxPanelModule,
    DatepickerModule,
    DropdownModule,
    FieldModule,
    FileSelectorModule,
    GhettoboxModule,
    LightboxModule,
    LinksModule,
    LoadingModule,
    NotificationsModule,
    OptionModule,
    PaginationModule,
    ProcessflowModule,
    RadioButtonModule,
    RadioButtonPanelModule,
    SearchModule,
    SelectModule,
    TableModule,
    TabsModule,
    TagModule,
    TextareaModule,
    TextexpandModule,
    TimeInputModule,
    ToggleModule,
    TooltipModule,
    UserMenuModule
  ]
})
export class PublicExamplesModule {}
