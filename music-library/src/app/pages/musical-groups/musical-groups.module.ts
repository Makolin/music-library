import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MusicalGroupsComponent } from './musical-groups.component';

/**
 * Загрузка компонента музыкальных групп
 */
const ROUTES: Routes = [
  { path: '', component: MusicalGroupsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
  exports: [
    MusicalGroupsComponent
  ],
  declarations: [
    MusicalGroupsComponent
  ]
})
export class MusicalGroupsModule { }
