import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MusicalGroupsComponent } from './musical-groups.component';
import { GroupCreateComponent } from './group-create/group-create.component';

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
    ReactiveFormsModule
  ],
  exports: [
    MusicalGroupsComponent
  ],
  declarations: [
    MusicalGroupsComponent,
    GroupCreateComponent
  ]
})
export class MusicalGroupsModule { }
