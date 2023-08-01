/**
 * Основное меню приложения
 */
export enum Menu {
  /** Основная страница */
  Main = 0,

  /** Музыкальная группа */
  MusicalGroups = 1,

  /** Список альбомов */
  MusicalAlbums = 2,

  /** Список треков */
  MusicalTracks = 3
}

/**
 * Сопоставление объекта перечисления и наименования вкладки
 */
export const MenuLabel = new Map<number, string>([
  [Menu.Main, 'Основная страница'],
  [Menu.MusicalGroups, 'Исполнители'],
  [Menu.MusicalAlbums, 'Альбомы'],
  [Menu.MusicalTracks, 'Треки']
]);
