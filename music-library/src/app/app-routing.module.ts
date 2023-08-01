import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Основные маршруты
 */
const ROUTES: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', loadChildren: () => import('./pages/main/main.module').then(module => module.MainModule)},
  { path: 'musical-groups', loadChildren: () => import('./pages/musical-groups/musical-groups.module').then(module => module.MusicalGroupsModule)},
  { path: 'musical-albums', loadChildren: () => import('./pages/musical-albums/musical-albums.module').then(module => module.MusicalAlbumsModule)},
  { path: 'musical-tracks', loadChildren: () => import('./pages/musical-tracks/musical-tracks.module').then(module => module.MusicalTracksModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
