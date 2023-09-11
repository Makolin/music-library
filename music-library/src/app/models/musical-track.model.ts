/**
 * Класс для хранения информации о музыкальных треках
 */
export class MusicalTrack {
  /**
   * Конструктор создания музыкального трека
   * @param id идентификатор
   * @param name наименование
   * @param favorite любимое
   */
  public constructor(
    public id: number,
    public name: string,
    public isFavorite: boolean
  ) { }
}
