import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatTooltip } from '@angular/material/tooltip';

import { MusicalTrack } from '../../models/musical-track.model';
import { DataHandlingService } from '../../services/data-handling.service';

/**
 * Компонент для вывода информации о треках
 */
@Component({
  selector: 'app-musical-tracks',
  standalone: true,
  imports: [MatCheckbox, NgFor, MatTooltip],
  templateUrl: './musical-tracks.component.html',
  styleUrls: ['./musical-tracks.component.scss']
})
export class MusicalTracksComponent {
  /** Список всех музыкальных треков */
  public allMusicalTracks: MusicalTrack[] = [];

  public constructor(
    private _dataHandlingService: DataHandlingService
  ) {
    this.setAllTracks();
  }

  /**
   * Заполняем список всех альбомов
   */
  private setAllTracks(): void {
    this._dataHandlingService.allMusicalGroups.forEach(group => {
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
