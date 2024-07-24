/**
 * Класс для хранения наименования параметра и его значения
 */
export class Parameter {
  /**
   * Конструктор
   * @param name наименование параметра
   * @param value значение параметра
   */
  public constructor(
    public name: string,
    public value: string
  ) { }
}
