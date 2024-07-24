import { Injectable } from '@angular/core';

import { ModalType } from '../models/enums/modal-type.enum';
import { MusicalAlbum } from '../models/musical-album.model';
import { MusicalConcert } from '../models/musical-concert.model';
import { MusicalGenre } from '../models/musical-genre.model';
import { MusicalGroup } from '../models/musical-group.model';
import { MusicalTrack } from '../models/musical-track.model';

/**
 * Сервис для работы с модальными окнами
 */
@Injectable({
  providedIn: 'root'
})
export class ModalStateService {
  /** Выбранная музыкальная группа */
  public selectedMusicalGroup: MusicalGroup | null = null;

  /** Выбранный музыкальный альбом */
  public selectedMusicalAlbum: MusicalAlbum | null = null;

  /** Выбранный музыкальный жанр */
  public selectedMusicalGenre: MusicalGenre | null = null;

  /** Выбранный музыкальный трек */
  public selectedMusicalTrack: MusicalTrack | null = null;

  /** Выбранный музыкальный концерт */
  public selectedMusicalConcert: MusicalConcert | null = null;

  /** Список модальных окон и статусов открытия/закрытия */
  public allModalsState = new Map<ModalType, boolean>([
    [ModalType.MusicalGroup, false],
    [ModalType.MusicalAlbum, false],
    [ModalType.MusicalGenre, false],
    [ModalType.MusicalTrack, false],
    [ModalType.MusicalConcert, false]
  ]);

  /**
   * Установка статуса для модальных окон (открыть, закрыть)
   * @param modalType тип модального окна
   * @param state статус
   */
  public setStateModal(modalType: ModalType, state: boolean): void {
    this.allModalsState.set(modalType, state);
  }
}
