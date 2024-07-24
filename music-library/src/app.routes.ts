import { Routes } from '@angular/router';

import { Menu } from './app/models/enums/menu.enum';

/**
 * Основные маршруты
 */
export const APP_ROUTES: Routes = [
  {
    path: '', redirectTo: `/${Menu.Main}`, pathMatch: 'full'
  },
  {
    path: Menu.Main,
    loadComponent: () => import('./app/pages/main/main.component').then(m => m.MainComponent)
  },
  {
    path: Menu.MusicalGroups,
    loadComponent: () => import('./app/pages/musical-groups/musical-groups.component').then(mod => mod.MusicalGroupsComponent)
  },
  {
    path: Menu.MusicalAlbums,
    loadComponent: () => import('./app/pages/musical-albums/musical-albums.component').then(mod => mod.MusicalAlbumsComponent)
  },
  {
    path: Menu.MusicalTracks,
    loadComponent: () => import('./app/pages/musical-tracks/musical-tracks.component').then(mod => mod.MusicalTracksComponent)
  },
  {
    path: Menu.MusicalGenres,
    loadComponent: () => import('./app/pages/musical-genres/musical-genres.component').then(mod => mod.MusicalGenresComponent)
  },
  {
    path: Menu.MusicalConcerts,
    loadComponent: () => import('./app/pages/musical-concerts/musical-concerts.component').then(mod => mod.MusicalConcertsComponent)
  }
];
