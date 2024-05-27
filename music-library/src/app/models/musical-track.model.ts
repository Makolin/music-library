/**
 * Класс для хранения информации о музыкальных треках
 */
export class MusicalTrack {
  /** Наименование группы */
  public groupName: string = '';

  /** Наименование альбома */
  public albumName: string = '';

  /**
   * Конструктор создания музыкального трека
   * @param id идентификатор
   * @param serialNumber порядковый номер
   * @param name наименование
   * @param isFavorite любимое
   */
  public constructor(
    public id: number,
    public serialNumber: number,
    public name: string,
    public isFavorite: boolean
  ) { }
}