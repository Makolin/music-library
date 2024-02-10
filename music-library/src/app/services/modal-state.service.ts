import { Injectable } from '@angular/core';

import { ModalType } from '../enums/modal-type.enum';
import { MusicalGroup } from '../models/musical-group.model';

/**
 * Сервис состояний модальных окон
 */
@Injectable({
  providedIn: 'root'
})
export class ModalStateService {
  /** Выбранная музыкальная группа */
  public selectedMusicalGroup: MusicalGroup | null = null;

  /** Список модальных окон и статусов открытия/закрытия */
  public allModalsState = new Map<ModalType, boolean>([
    [ModalType.CreateMusicalGroup, false]
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