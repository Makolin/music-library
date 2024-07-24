import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatTooltip } from '@angular/material/tooltip';

import { MusicalTrack } from '../../../models/musical-track.model';
import { DataHandlingService } from '../../../services/data-handling.service';

/**
 * Компонент для вывода строки с треком
 */
@Component({
  selector: 'app-tracks-row',
  standalone: true,
  imports: [MatCheckbox, MatTooltip],
  templateUrl: './tracks-row.component.html',
  styleUrls: ['./tracks-row.component.scss']
})
export class TracksRowComponent {
  /** Музыкальный трек */
  @Input()
  public musicalTrack!: MusicalTrack;

  /** Выбранный трек */
  @Output()
  public selectedTrack = new EventEmitter<MusicalTrack>();

  public constructor(
    private _dataHandlingService: DataHandlingService
  ) { }

  /**
   * Установка статуса любимого трека
   * @param track трек
   * @param status статус
   */
  public setStatusFavoriteTrack(track: MusicalTrack, status: boolean): void {
    track.isFavorite = status;
  }

  /**
   * Отправка выбранного трека
   */
  public sendSelectedTrack(): void {
    this.selectedTrack.emit(this.musicalTrack);
  }

  /**
   * Открытие диалогово окна подтверждения удаления
   * TODO: Добавить модальное окно
   */
  public openDialogDeleteTrack(): void {
    const album = this._dataHandlingService.allMusicalAlbums.find(element => element.id == this.musicalTrack.albumId);
    if (album == null) {
      return;
    }

    album.tracks = album.tracks.filter(element => element.id == this.musicalTrack.id);
    this._dataHandlingService.setAllTracks();
  }
}
