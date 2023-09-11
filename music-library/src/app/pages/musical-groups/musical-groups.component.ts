import { Component } from '@angular/core';

import { ModalType } from './../../enums/modal-type.enum';
import { DataRequestService } from '../../services/data-request.service';
import { ModalStateService } from './../../services/modal-state.service';

/**
 * Компонент для вывода информации о группах
 */
@Component({
  selector: 'app-musical-groups',
  templateUrl: './musical-groups.component.html',
  styleUrls: ['./musical-groups.component.scss']
})
export class MusicalGroupsComponent {
  /** Алиас типов модальных окон */
  public ModalType = ModalType;

  public constructor(
    public dataRequestService: DataRequestService,
    public modalStateService: ModalStateService
  ) { }

  /**
   * Открытие модального окна для создания группы
   */
  public openModalCreateGroup(): void{
    this.modalStateService.setStateModal(ModalType.CreateMusicalGroup, true);
  }
}
