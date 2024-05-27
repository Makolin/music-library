import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterModule, Routes } from '@angular/router';

import { MusicalTracksComponent } from './musical-tracks.component';

/**
 * Загрузка компонента музыкальных треков
 */
const ROUTES: Routes = [
  { path: '', component: MusicalTracksComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MatCheckboxModule
  ],
  exports: [
    MusicalTracksComponent
  ],
  declarations: [
    MusicalTracksComponent
  ]
})
export class MusicalTracksModule { }