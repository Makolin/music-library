import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { DataHandlingService } from './data-handling.service';
import { DataFilterService } from './data-filter.service';

/**
 * Сервис для выполнения запросов
 */
@Injectable({
  providedIn: 'root',
})
export class DataRequestService {
  /** Ссылка для скачивания файла */
  public downloadJsonHref!: SafeUrl;

  /** Загрузка всех данных */
  public isLoadAllData: boolean = false;

  /** Загрузка музыкальных групп */
  private _isLoadMusicalGroups: boolean = false;

  /** Загрузка музыкальных жанров */
  private _isLoadMusicalGenres: boolean = false;

  /** Ссылка для чтения музыкальных групп */
  private readonly URL_MUSICAL_GROUPS: string = 'assets/musical_groups.json';

  /** Ссылка для чтения жанров музыкальных групп */
  private readonly URL_MUSICAL_GENRES: string = 'assets/musical_genres.json';

  public constructor(
    private _httpClient: HttpClient,
    private _sanitizer: DomSanitizer,
    private _dataHandlingService: DataHandlingService,
    private _dataFilterService: DataFilterService
  ) {
    this.readDataMusicalGroups();
    this.readDataMusicalGenres();
  }

  /**
   * Чтение данных из файла JSON музыкальных групп
   */
  public readDataMusicalGroups(): void {
    this._httpClient.get(this.URL_MUSICAL_GROUPS).subscribe({
      next: (data: any) => {
        this._dataHandlingService.setAllMusicGroup(data);
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        this._dataFilterService.sortMusicGroups();
        this._isLoadMusicalGroups = true;
        this.checkAllLoad();
      }
    });
  }

  /**
   * Чтение данных из файла JSON музыкальных жанров
   */
  public readDataMusicalGenres(): void {
    this._httpClient.get(this.URL_MUSICAL_GENRES).subscribe({
      next: (data: any) => {
        this._dataHandlingService.setAllMusicGenre(data);
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        this._dataFilterService.sortMusicGenres();
        this._isLoadMusicalGenres = true;
        this.checkAllLoad();
      }
    });
  }

  /**
   * Создание ссылки для скачивания файла
   */
  public createLinkForDownload(): void {
    const convertData = JSON.stringify(this._dataHandlingService.allMusicalGroups);
    this.downloadJsonHref = this._sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(convertData));
  }

  /**
   * Проверка загрузки всех данных
   */
  private checkAllLoad(): void {
    this.isLoadAllData = this._isLoadMusicalGenres && this._isLoadMusicalGroups;
  }
}
