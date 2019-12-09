import { ComponentPortal } from '@angular/cdk/portal';
import { Component } from '@angular/core';

import { ExampleProvider } from '../../shared/example-provider';
import { SimpleContextmenuComponent } from '../business-examples/simple-contextmenu/simple-contextmenu.component';
import { SkippableProcessflowComponent } from '../business-examples/skippable-processflow/skippable-processflow.component';
import { TableActionsShowcaseComponent } from '../business-examples/table-showcase/table-actions-showcase/table-actions-showcase.component';
import { TableGroupedColumnsShowcaseComponent } from '../business-examples/table-showcase/table-grouped-columns-showcase/table-grouped-columns-showcase.component';
import { TableGroupedRowsShowcaseComponent } from '../business-examples/table-showcase/table-grouped-rows-showcase/table-grouped-rows-showcase.component';
import { TableSimpleShowcaseComponent } from '../business-examples/table-showcase/table-simple-showcase/table-simple-showcase.component';
import { TableSortShowcaseComponent } from '../business-examples/table-showcase/table-sort-showcase/table-sort-showcase.component';
import { TooltipShowcaseComponent } from '../business-examples/tooltip-showcase/tooltip-showcase.component';
import { UsermenuShowcaseComponent } from '../business-examples/usermenu-showcase/usermenu-showcase.component';

@Component({
  selector: 'sbb-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss'],
  providers: [{ provide: ExampleProvider, useExisting: BusinessComponent }]
})
export class BusinessComponent implements ExampleProvider {
  formComponents = {
    autocomplete: 'Autocomplete',
    checkbox: 'Checkbox',
    datepicker: 'Datepicker',
    field: 'Field',
    'radio-button': 'Radiobutton',
    select: 'Select',
    textarea: 'Textarea',
    'time-input': 'Time Input'
  };
  navigationComponents = {
    header: 'Header'
  };
  layoutComponents = {
    accordion: 'Accordion',
    processflow: 'Processflow',
    usermenu: 'Usermenu',
    table: 'Table'
  };
  buttonAndIndicatorComponents = {
    button: 'Button',
    contextmenu: 'Contextmenu'
  };
  popupsAndModals = {
    tooltip: 'Tooltip'
  };
  private _examples: { [component: string]: { [name: string]: ComponentPortal<any> } } = {
    processflow: {
      'skippable-processflow': new ComponentPortal(SkippableProcessflowComponent)
    },
    contextmenu: {
      'simple-contextmenu': new ComponentPortal(SimpleContextmenuComponent)
    },
    tooltip: {
      'tooltip-showcase': new ComponentPortal(TooltipShowcaseComponent)
    },
    usermenu: {
      'usermenu-showcase': new ComponentPortal(UsermenuShowcaseComponent)
    },
    table: {
      'simple-table': new ComponentPortal(TableSimpleShowcaseComponent),
      'action-table': new ComponentPortal(TableActionsShowcaseComponent),
      'grouped-columns-table': new ComponentPortal(TableGroupedColumnsShowcaseComponent),
      'grouped-rows-table': new ComponentPortal(TableGroupedRowsShowcaseComponent),
      'sortable-table': new ComponentPortal(TableSortShowcaseComponent)
    }
  };

  resolveExample<TComponent = any>(
    component: string
  ): { [name: string]: ComponentPortal<TComponent> } {
    return this._examples[component];
  }
}
