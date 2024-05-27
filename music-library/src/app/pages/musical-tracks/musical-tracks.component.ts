import { Component } from '@angular/core';

import { MusicalTrack } from 'src/app/models/musical-track.model';
import { DataRequestService } from 'src/app/services/data-request.service';

/**
 * Компонент для вывода информации о треках
 */
@Component({
  selector: 'app-musical-tracks',
  templateUrl: './musical-tracks.component.html',
  styleUrls: ['./musical-tracks.component.scss']
})
export class MusicalTracksComponent {
  /** Список всех музыкальных треков */
  public allMusicalTracks: MusicalTrack[] = [];

  public constructor(
    private dataRequestService: DataRequestService
  ) {
    this.setAllTracks();
  }

  /**
   * Заполняем список всех альбомов
   */
  private setAllTracks(): void {
    this.dataRequestService.allMusicalGroups.forEach(group => {
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
   * Установка статуса любимого трека
   * @param track трек
   * @param status статус
   */
  public setStatusFavoriteTrack(track: MusicalTrack, status: boolean): void {
    track.isFavorite = status;
  }
}