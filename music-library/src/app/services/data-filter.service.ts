import { Injectable } from '@angular/core';

import { MusicalGenre } from '../models/musical-genre.model';
import { MusicalGroup } from '../models/musical-group.model';
import { DataRequestService } from './data-request.service';

/**
 * Сервис для фильтрации и сортировки данных
 */
@Injectable({
  providedIn: 'root'
})
export class DataFilterService {
  public constructor(
    private dataRequestService: DataRequestService
  ) { }

  /**
   * Сортировка музыкальных групп по алфавиту
   */
  public sortMusicGroups(): void {
    this.dataRequestService.allMusicalGroups.sort((a, b) => {
      return this.sortByName(a, b);
    });
  }

  /**
   * Сортировка музыкальных жанров
   */
  public sortMusicGenres(): void {
    this.dataRequestService.allMusicalGenres.sort((a, b) => {
      return this.sortByName(a, b);
    });
  }

  /**
   * Сортировка по наименованию
   * @param first первый объект
   * @param second второй объект
   * @returns результат сравнения
   */
  private sortByName(first: MusicalGenre | MusicalGroup, second: MusicalGenre | MusicalGroup): number {
    if (first.name < second.name) {
      return -1;
    } else if (first.name > second.name) {
      return 1;
    } else {
      return 0;
    }
  }
}