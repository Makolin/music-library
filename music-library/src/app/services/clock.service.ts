import { Injectable } from '@angular/core';

/**
 * Сервис для работы со временем
 */
@Injectable({
  providedIn: 'root'
})
export class ClockService {
  /**
   * Получить текущий день
   * @returns текущая дата
   */
  public getToday(): Date {
    return new Date();
  }
}
