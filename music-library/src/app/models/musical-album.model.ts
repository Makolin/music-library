import { MusicalTrack } from "./musical-track.model";

/**
 * Класс для хранения информации о музыкальных альбомах
 */
export class MusicalAlbum {
  /** Наименование группы */
  public groupName: string = '';

  /**
   * Конструктор создания альбома
   * @param id идентификатор
   * @param groupId идентификатор группы
   * @param name наименование
   * @param year год выпуска
   * @param tracks список треков альбома
   */
  public constructor(
    public id: number,
    public groupId: number,
    public name: string,
    public year: number,
    public tracks: MusicalTrack[]
  ) { }
}