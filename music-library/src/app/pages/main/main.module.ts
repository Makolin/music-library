import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';
import { MainTableComponent } from './main-table/main-table.component';
import { TableRowComponent } from './main-table/table-row/table-row.component';

/**
 * Загрузка компонента основной страницы
 */
const ROUTES: Routes = [
  { path: '', component: MainComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
  exports: [
    MainComponent
  ],
  declarations: [
    MainComponent,
    MainTableComponent,
    TableRowComponent
  ]
})
export class MainModule { }