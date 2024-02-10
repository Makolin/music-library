import { Injectable } from '@angular/core';

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
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  /**
   * Сортировка музыкальных жанров
   */
  public sortMusicGenres(): void {
    this.dataRequestService.allMusicalGenres.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}
