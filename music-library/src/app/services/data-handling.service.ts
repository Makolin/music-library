import { Injectable } from '@angular/core';

import { MusicalAlbum } from '../models/musical-album.model';
import { MusicalConcert } from '../models/musical-concert.model';
import { MusicalGenre } from '../models/musical-genre.model';
import { MusicalGroup } from '../models/musical-group.model';
import { MusicalTrack } from '../models/musical-track.model';
import { ClockService } from './clock.service';
import { DataFilterService } from './data-filter.service';

/**
 * Сервис для обработки данных
 */
@Injectable({
  providedIn: 'root'
})
export class DataHandlingService {
  /** Список всех музыкальных групп */
  public allMusicalGroups: MusicalGroup[] = [];

  /** Список всех музыкальных альбомов */
  public allMusicalAlbums: MusicalAlbum[] = [];

  /** Список всех музыкальных жанров */
  public allMusicalGenres: MusicalGenre[] = [];

  /** Список всех музыкальных треков */
  public allMusicalTracks: MusicalTrack[] = [];

  /** Список всех музыкальных концертов */
  public allMusicalConcert: MusicalConcert[] = [];

  public constructor(
    private _clockService: ClockService
  ) { }

  /**
   * Заполняем список всех альбомов
   * @param dataFilterService сервис для сортировки
   */
  public setAllAlbums(dataFilterService: DataFilterService): void {
    this.allMusicalAlbums = [];

    this.allMusicalGroups.forEach((group: MusicalGroup) => {
      group.albums.forEach((album: MusicalAlbum) => {
        album.groupName = group.name;
        this.allMusicalAlbums.push(album);
      });
    });

    dataFilterService.sortMusicAlbums();
  }

  /**
   * Заполнение всех музыкальных групп
   * @param data данные
   */
  public setAllMusicGroup(data: MusicalGroup[]): void {
    data.forEach((groupAPI: MusicalGroup) => {
      this.allMusicalGroups.push(
        new MusicalGroup(groupAPI.id, groupAPI.name, groupAPI.genreId, groupAPI.isBrokeUp ?? false, this.getMusicalAlbum(groupAPI))
      );
    });
  }

  /**
   * Заполняем список всех треков
   */
  public setAllTracks(): void {
    this.allMusicalTracks = [];

    this.allMusicalGroups.forEach(group => {
      group.albums.forEach(album => {
        album.tracks.forEach(track => {
          track.groupName = group.name;
          track.albumName = album.name;
          this.allMusicalTracks.push(track);
        });
      });
    });
  }

  /**
   * Получение списка альбомов из группы
   * @param groupAPI группа с API
   * @returns группа для работы на фронте
   */
  private getMusicalAlbum(groupAPI: MusicalGroup): MusicalAlbum[] {
    const albums: MusicalAlbum[] = [];
    groupAPI.albums.forEach((albumAPI: MusicalAlbum) => {
      const tracks: MusicalTrack[] = [];
      albumAPI.tracks.forEach((trackAPI: MusicalTrack) => {
        tracks.push(new MusicalTrack(trackAPI.id, trackAPI.serialNumber, trackAPI.albumId, trackAPI.name, trackAPI.isFavorite));
      });

      albums.push(
        new MusicalAlbum(albumAPI.id, albumAPI.groupId, albumAPI.name, albumAPI.year, albumAPI.isListened ?? false, tracks)
      );
    });

    return albums;
  }

  /**
   * Заполнение всех музыкальных жанров
   * @param data данные с API
   */
  public setAllMusicGenre(data: MusicalGenre[]): void {
    data.forEach((groupAPI: MusicalGenre) => {
      this.allMusicalGenres.push(new MusicalGenre(groupAPI.id, groupAPI.name));
    });
  }

  /**
   * Заполнение всех музыкальных концертов
   * @param data данные
   */
  public setAllMusicConcerts(data: MusicalConcert[]): void {
    data.forEach((concertAPI: MusicalConcert) => {
      this.allMusicalConcert.push(
        new MusicalConcert(
          concertAPI.id,
          concertAPI.groupId,
          concertAPI.date,
          concertAPI.area,
          concertAPI.isPast,
          concertAPI.isBoughtTickets,
          concertAPI.isTribute
        )
      );
    });
  }

  /**
   * Заполнение наименованием группы концерт
   * @param musicalConcert концерт
   */
  public setGroupForConcert(musicalConcert: MusicalConcert): void {
    if (musicalConcert.groupName != '') {
      return;
    }

    const findGroup = this.allMusicalGroups.find(element => element.id == musicalConcert.groupId);
    if (findGroup != null) {
      musicalConcert.groupName = findGroup.name;
    }
  }

  /**
   * Заполнение прошел или нет концерт
   * @param musicalConcert концерт
   */
  public setIsPastForConcert(musicalConcert: MusicalConcert): void {
    if (musicalConcert.isPast) {
      return;
    }

    musicalConcert.isPast = musicalConcert.date < this._clockService.getToday();
  }
}