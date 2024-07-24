/**
 * Класс для хранения информации о музыкальных треках
 */
export class MusicalTrack {
  /** Наименование группы */
  public groupName?: string = '';

  /** Наименование альбома */
  public albumName?: string = '';

  /**
   * Конструктор
   * @param id идентификатор
   * @param serialNumber порядковый номер
   * @param albumId идентификатор альбома
   * @param name наименование
   * @param isFavorite любимое
   */
  public constructor(
    public id: number,
    public serialNumber: number,
    public albumId: number,
    public name: string,
    public isFavorite: boolean
  ) { }
}
