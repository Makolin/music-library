import { Component, Input } from '@angular/core';

import { ModalType } from '../../../models/enums/modal-type.enum';
import { ModalStateService } from '../../../services/modal-state.service';

/**
 * Компонент для вывода наименования модального окна
 */
@Component({
  selector: 'app-modal-header',
  standalone: true,
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.scss']
})
export class ModalHeaderComponent {
  /** Наименование модального окна */
  @Input()
  public titleModal!: string;

  /** Тип модального окна */
  @Input()
  public modalType!: ModalType;

  public constructor(
    private _stateModalService: ModalStateService
  ) { }

  /**
   * Закрытие модального окна
   */
  public closeModalWindow(): void {
    this._stateModalService.setStateModal(this.modalType, false);
  }
}
