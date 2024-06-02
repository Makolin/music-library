import { Injectable } from '@angular/core';

import { ModalType } from '../enums/modal-type.enum';
import { MusicalGroup } from '../models/musical-group.model';
import { MusicalAlbum } from '../models/musical-album.model';
import { MusicalGenre } from '../models/musical-genre.model';

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

  /** Список модальных окон и статусов открытия/закрытия */
  public allModalsState = new Map<ModalType, boolean>([
    [ModalType.MusicalGroup, false],
    [ModalType.MusicalAlbum, false],
    [ModalType.MusicalGenre, false]
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
