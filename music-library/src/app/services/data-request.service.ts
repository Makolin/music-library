import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { MusicalGenre } from '../models/musical-genre.model';
import { MusicalGroup } from '../models/musical-group.model';

/**
 * Сервис для работы с информацией
 */
@Injectable({
  providedIn: 'root'
})
export class DataRequestService {
  /** Список всех музыкальных групп */
  public allMusicalGroups: MusicalGroup[] = [];

  /** Список всех музыкальных жанров */
  public allMusicalGenres: MusicalGenre[] = [];

  /** Ссылка для скачивания файла */
  public downloadJsonHref!: SafeUrl;

  /** Загрузка всех данных */
  public isLoadAllData: boolean = false;

  /** Загрузка музыкальных групп */
  private isLoadMusicalGroups: boolean = false;

  /** Загрузка музыкальных жанров */
  private isLoadMusicalGenres: boolean = false;

  /** Ссылка для чтения музыкальных групп */
  private readonly URL_MUSICAL_GROUPS: string = 'assets/musical_groups.json';

  /** Ссылка для чтения жанров музыкальных групп */
  private readonly URL_MUSICAL_GENRES: string = 'assets/musical_genres.json';

  public constructor(
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer
  ) {
    this.readDataMusicalGroups();
    this.readDataMusicalGenres();
  }

  /**
   * Чтение данных из файла JSON музыкальных групп
   */
  public readDataMusicalGroups(): void {
    this.httpClient.get(this.URL_MUSICAL_GROUPS).subscribe({
      next: (data: any) => {
        data.forEach((element: MusicalGroup) => {
          this.allMusicalGroups.push(new MusicalGroup(element.id, element.name, element.genreId, element.albums));
        });
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        this.isLoadMusicalGroups = true;
        this.checkAllLoad();
      }
    });
  }

  /**
   * Чтение данных из файла JSON музыкальных жанров
   */
  public readDataMusicalGenres(): void {
    this.httpClient.get(this.URL_MUSICAL_GENRES).subscribe({
      next: (data: any) => {
        data.forEach((element: MusicalGenre) => {
          this.allMusicalGenres.push(new MusicalGenre(element.id, element.name));
        });
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        this.isLoadMusicalGenres = true;
        this.checkAllLoad();
      }
    });
  }

  /**
   * Создание ссылки для скачивания файла
   */
  public createLinkForDownload(): void {
    console.log(this.allMusicalGroups);
    const convertData = JSON.stringify(this.allMusicalGroups);
    this.downloadJsonHref = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(convertData));
  }

  /**
   * Проверка загрузки всех данных
   */
  private checkAllLoad(): void {
    this.isLoadAllData = this.isLoadMusicalGenres && this.isLoadMusicalGroups;
  }
}