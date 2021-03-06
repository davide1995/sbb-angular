import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MarkdownViewerComponent } from '../shared/markdown-viewer/markdown-viewer.component';

import { IconSearchComponent } from './icon-search/icon-search.component';
import { IconViewerComponent } from './icon-viewer/icon-viewer.component';
import { IconsComponent } from './icons/icons.component';

const routes: Routes = [
  {
    path: 'icons',
    component: IconsComponent,
    data: { library: 'angular-icons' },
    children: [
      {
        path: '',
        redirectTo: 'introduction/getting-started',
        pathMatch: 'full'
      },
      {
        path: 'introduction/:id',
        component: MarkdownViewerComponent,
        data: { library: 'angular-icons' }
      },
      {
        path: 'search',
        component: IconSearchComponent
      },
      {
        path: 'components/:id',
        component: IconViewerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconsRoutingModule {}
