/**
 * Класс для хранения наименования параметра и его значения
 */
export class Parameter {
  /**
   * Создание параметра
   * @param name наименование параметра
   * @param value значение параметра
   */
  public constructor(
    public name: string,
    public value: string
  ) { }
}
