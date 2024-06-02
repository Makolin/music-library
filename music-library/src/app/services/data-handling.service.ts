import { Injectable } from '@angular/core';

import { MusicalAlbum } from '../models/musical-album.model';
import { MusicalGenre } from '../models/musical-genre.model';
import { MusicalGroup } from '../models/musical-group.model';
import { MusicalTrack } from '../models/musical-track.model';
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

  /**
   * Заполняем список всех альбомов
   * @param dataFilterService сервис для сортировки
   */
  public setAllAlbums(dataFilterService: DataFilterService): void {
    this.allMusicalAlbums = [];

    this.allMusicalGroups.forEach((group: MusicalGroup) => {
      group.albums.forEach(album => {
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
        new MusicalGroup(groupAPI.id, groupAPI.name, groupAPI.genreId, this.getMusicalAlbum(groupAPI))
      );
    });
  }

  /**
   * Получение списка альбомов из группы
   * @param groupAPI группа с API
   * @returns группа для работы на фронте
   */
  private getMusicalAlbum(groupAPI: MusicalGroup): MusicalAlbum[] {
    const albums: MusicalAlbum[] = [];
    groupAPI.albums.forEach(albumAPI => {
      const tracks: MusicalTrack[] = [];
      albumAPI.tracks.forEach(trackAPI => {
        tracks.push(new MusicalTrack(trackAPI.id, trackAPI.serialNumber, trackAPI.name, trackAPI.isFavorite));
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
      this.allMusicalGenres.push(
        new MusicalGenre(groupAPI.id, groupAPI.name)
      );
    });
  }
}
