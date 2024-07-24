import { MusicalAlbum } from './musical-album.model';
import { MusicalTrack } from './musical-track.model';

/**
 * Класс для хранения информации о музыкальных группах
 */
export class MusicalGroup {
  /** Количество альбомов */
  public countAlbums?: number = 0;

  /** Количество треков */
  public countTracks?: number = 0;

  /**
   * Конструктор
   * @param id идентификатор
   * @param name наименование группы
   * @param genreId жанр группы
   * @param isBrokeUp распалась
   * @param albums список музыкальных альбомов
   */
  public constructor(
    public id: number,
    public name: string,
    public genreId: number,
    public isBrokeUp: boolean,
    public albums: MusicalAlbum[]
  ) {
    this.countAlbums = albums.length;
    albums.forEach(album => {
      if (this.countTracks != null) {
        this.countTracks += album.tracks.length;
      }
    });
  }

  /**
   * Создание копии объекта
   * @returns копия музыкальной группы
   */
  public createCopyObject(): MusicalGroup {
    const albums: MusicalAlbum[] = [];
    this.albums.forEach(album => {
      const tracks: MusicalTrack[] = [];
      album.tracks.forEach(track => {
        tracks.push(new MusicalTrack(track.id, track.serialNumber, track.albumId, track.name, track.isFavorite));
      });

      albums.push(new MusicalAlbum(album.id, album.groupId, album.name, album.year, album.isListened, tracks));
    });

    return new MusicalGroup(this.id, this.name, this.genreId, this.isBrokeUp, albums);
  }
}
