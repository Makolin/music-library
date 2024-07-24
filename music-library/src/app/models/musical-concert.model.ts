/**
 * Музыкальный концерт
 */
export class MusicalConcert {
  /** Наименование группы */
  public groupName?: string = '';

  /**
   * Конструктор
   * @param id идентификатор
   * @param groupId идентификатор группы
   * @param date дата проведения
   * @param area площадка проведения
   * @param isPast прошел ли уже
   * @param isBoughtTickets куплен ли билет
   * @param isTribute являются трибьютами
   */
  public constructor(
    public id: number,
    public groupId: number,
    public date: Date,
    public area: string,
    public isPast: boolean,
    public isBoughtTickets: boolean,
    public isTribute: boolean
  ) {
    this.date = new Date(date);
  }

  /**
   * Создание копии объекта
   * @returns копия объекта
   */
  public cloneMusicalConcert(): MusicalConcert {
    const copyMusicalConcert = new MusicalConcert(
      this.id,
      this.groupId,
      this.date,
      this.area,
      this.isPast,
      this.isBoughtTickets,
      this.isTribute
    );
    return copyMusicalConcert;
  }
}
