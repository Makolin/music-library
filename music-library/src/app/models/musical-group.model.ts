import { MusicalAlbum } from "./musical-album.model";

/**
 * Класс для хранения информации о музыкальных группах
 */
export class MusicalGroup {
  /** Количество альбомов */
  public countAlbums: number = 0;

  /** Количество треков */
  public countTracks: number = 0;

  /**
   * Конструктор создания музыкальной группы
   * @param id идентификатор
   * @param name наименование группы
   * @param genre жанр группы
   * @param albums список музыкальных альбомов
   */
  public constructor(
    public id: number,
    public name: string,
    public genreId: number,
    public albums: MusicalAlbum[]
  ) {
    this.countAlbums = albums.length;
    albums.forEach(album => {
      this.countTracks += album.tracks.length;
    });
  }
}
