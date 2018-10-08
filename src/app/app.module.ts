import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search-component/search.component';
import { NavlistComponent } from './navlist-component/navlist.component';
import { SearchIconComponent } from './search-icon/search-icon.component';
import { NavlistIconComponent } from './navlist-icon/navlist-icon.component';
import { ContentComponent } from './content/content.component';

import { ComponentUiService } from './services/component-ui.service';
import { IconUiService } from './services/icon-ui.service';
import { AccordionNotificationService } from './services/accordion-notification.service';

import { MonacoEditorModule } from 'ngx-monaco-editor';
import { IconCommonModule } from 'sbb-angular';
import { IconViewerDirective } from './directives/icon-viewer.directive';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ReplacePipe } from './shared/replace.pipe';
import { IconComponents } from './sbb-components-mapping-export';
import { ComponentViewerDirective } from './directives/component-viewer.directive';
import { ExamplesModule } from './examples/examples.module';
import { TextareaShowcaseComponent } from './examples/textarea-showcase/textarea-showcase.component';
import { InputFieldShowcaseComponent } from './examples/input-field-showcase/input-field-showcase.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavlistComponent,
    ContentComponent,
    HomeComponent,
    IconViewerDirective,
    ComponentViewerDirective,
    NavlistIconComponent,
    SearchIconComponent,
    ReplacePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MonacoEditorModule.forRoot(),
    AppRoutingModule,
    IconCommonModule.withComponents(IconComponents.types),
    ExamplesModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [ComponentUiService, IconUiService, AccordionNotificationService],
  entryComponents: [TextareaShowcaseComponent, InputFieldShowcaseComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
