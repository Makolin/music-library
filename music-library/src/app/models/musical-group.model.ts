import { MusicalAlbum } from "./musical-album.model";

/**
 * Класс для хранения информации о музыкальных группах
 */
export class MusicalGroup {
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
    public genre: string,
    public albums: MusicalAlbum[]
  ) { }
}
