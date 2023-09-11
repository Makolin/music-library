import { MusicalTrack } from "./musical-track.model";

/**
 * Класс для хранения информации о музыкальных альбомах
 */
export class MusicalAlbum {
  /**
   * Конструктор создания альбома
   * @param id идентификатор
   * @param name наименование
   * @param year год выпуска
   * @pram tracks список треков альбома
   */
  public constructor(
    public id: number,
    public name: string,
    public year: number,
    public tracks: MusicalTrack[]
  ) { }
}
