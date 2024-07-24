/**
 * Основное меню приложения
 */
export enum Menu {
  /** Основная страница */
  Main = 'main',

  /** Музыкальная группа */
  MusicalGroups = 'musical-groups',

  /** Список альбомов */
  MusicalAlbums = 'musical-albums',

  /** Список треков */
  MusicalTracks = 'musical-tracks',

  /** Музыкальные жанры */
  MusicalGenres = 'musical-genres',

  /** Музыкальные концерты */
  MusicalConcerts = 'musical-concerts'
}

/**
 * Сопоставление объекта перечисления и наименования вкладки
 */
export const MenuLabel = new Map<string, string>([
  [Menu.Main, 'Основная страница'],
  [Menu.MusicalGroups, 'Исполнители'],
  [Menu.MusicalAlbums, 'Альбомы'],
  [Menu.MusicalTracks, 'Треки'],
  [Menu.MusicalGenres, 'Жанры'],
  [Menu.MusicalConcerts, 'Концерты']
]);
