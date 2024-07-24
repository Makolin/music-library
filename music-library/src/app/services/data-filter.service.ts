import { Injectable } from '@angular/core';

import { MusicalGenre } from '../models/musical-genre.model';
import { MusicalGroup } from '../models/musical-group.model';
import { DataHandlingService } from './data-handling.service';
import { MusicalAlbum } from '../models/musical-album.model';

/**
 * Сервис для фильтрации и сортировки данных
 */
@Injectable({
  providedIn: 'root'
})
export class DataFilterService {
  public constructor(
    private _dataHandlingService: DataHandlingService
  ) { }

  /**
   * Сортировка музыкальных групп по алфавиту
   */
  public sortMusicGroups(): void {
    this._dataHandlingService.allMusicalGroups.sort((a, b) => {
      return this.sortByName(a, b);
    });
  }

  /**
   * Сортировка музыкальных жанров
   */
  public sortMusicGenres(): void {
    this._dataHandlingService.allMusicalGenres.sort((a, b) => {
      return this.sortByName(a, b);
    });
  }

  /**
   * Сортировка музыкальных альбомов
   */
  public sortMusicAlbums(): void {
    this._dataHandlingService.allMusicalAlbums.sort((a, b) => {
      return this.sortByName(a, b);
    });
  }

  public sortMusicConcerts(): void {
    this._dataHandlingService.allMusicalConcert.sort((a, b) => {
      return a.date > b.date ? -1 : a.date < b.date ? 1 : 0;
    });
  }

  /**
   * Сортировка по наименованию
   * @param first первый объект
   * @param second второй объект
   * @returns результат сравнения
   */
  private sortByName(
    first: MusicalGenre | MusicalGroup | MusicalAlbum,
    second: MusicalGenre | MusicalGroup | MusicalAlbum
  ): number {
    return first.name < second.name ? -1 : first.name > second.name ? 1 : 0;
  }
}
