import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { MusicalConcert } from '../models/musical-concert.model';
import { MusicalGenre } from '../models/musical-genre.model';
import { MusicalGroup } from '../models/musical-group.model';
import { DataFilterService } from './data-filter.service';
import { DataHandlingService } from './data-handling.service';

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

  /** Загрузка концертов музыкальных групп */
  private _isLoadMusicalConcerts: boolean = false;

  /** Ссылка для чтения музыкальных групп */
  private readonly URL_MUSICAL_GROUPS: string = 'assets/musical_groups.json';

  /** Ссылка для чтения жанров музыкальных групп */
  private readonly URL_MUSICAL_GENRES: string = 'assets/musical_genres.json';

  /** Ссылка для чтения концертов музыкальных групп */
  private readonly URL_MUSICAL_CONCERTS: string = 'assets/musical_concerts.json';

  public constructor(
    private _httpClient: HttpClient,
    private _sanitizer: DomSanitizer,
    private _dataHandlingService: DataHandlingService,
    private _dataFilterService: DataFilterService
  ) {
    this.readDataMusicalGroups();
    this.readDataMusicalGenres();
    this.readDataMusicalConcerts();
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
        this._dataHandlingService.setAllAlbums(this._dataFilterService);
        this._dataHandlingService.setAllTracks();
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
   * Чтение данных из файла JSON концертов
   */
  public readDataMusicalConcerts(): void {
    this._httpClient.get(this.URL_MUSICAL_CONCERTS).subscribe({
      next: (data: any) => {
        this._dataHandlingService.setAllMusicConcerts(data);
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        this._dataFilterService.sortMusicConcerts();
        this._isLoadMusicalConcerts = true;
        this.checkAllLoad();
      }
    });
  }

  /**
   * Создание ссылки для скачивания файла
   * @param data данные для скачивания
   */
  public createLinkForDownload(data: MusicalGroup[] | MusicalGenre[] | MusicalConcert[]): void {
    this.removeExcessData(data);

    const convertData = JSON.stringify(data);
    this.downloadJsonHref = this._sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(convertData));
  }

  /**
   * Удаление лишних данных
   * @param data исходные данные
   */
  private removeExcessData(data: MusicalGroup[] | MusicalGenre[] | MusicalConcert[]): void {
    data.forEach(element => {
      if (element instanceof MusicalGroup) {
        delete element.countAlbums;
        delete element.countTracks;

        element.albums.forEach(album => {
          delete album.groupName;

          album.tracks.forEach(track => {
            delete track.albumName;
            delete track.groupName;
          });
        });
      }

      if (element instanceof MusicalConcert) {
        delete element.groupName;
      }
    });
  }

  /**
   * Проверка загрузки всех данных
   */
  private checkAllLoad(): void {
    this.isLoadAllData = this._isLoadMusicalGenres && this._isLoadMusicalGroups && this._isLoadMusicalConcerts;
  }
}
