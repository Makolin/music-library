import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MusicalAlbumsComponent } from './musical-albums.component';

/**
 * Загрузка компонента музыкальных альбомов
 */
const ROUTES: Routes = [
  { path: '', component: MusicalAlbumsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
  exports: [
    MusicalAlbumsComponent
  ],
  declarations: [
    MusicalAlbumsComponent
  ]
})
export class MusicalAlbumsModule { }
