import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

import { MusicalGroup } from '../../models/musical-group.model';
import { CountTracksPipe } from '../../pipe/count-tracks.pipe';
import { DataHandlingService } from '../../services/data-handling.service';
import { ModalType } from './../../enums/modal-type.enum';
import { ModalStateService } from './../../services/modal-state.service';

/**
 * Компонент для вывода информации о группах
 */
@Component({
  selector: 'app-musical-groups',
  standalone: true,
  imports: [NgFor, CountTracksPipe],
  templateUrl: './musical-groups.component.html',
  styleUrls: ['./musical-groups.component.scss']
})
export class MusicalGroupsComponent {
  public constructor(
    public dataHandlingService: DataHandlingService,
    private _modalStateService: ModalStateService
  ) { }

  /**
   * Открытие модального окна для редактирования группы
   * @param musicalGroup музыкальная группа
   */
  public openModalEditGroup(musicalGroup: MusicalGroup | null): void {
    this._modalStateService.selectedMusicalGroup = musicalGroup;
    this._modalStateService.setStateModal(ModalType.MusicalGroup, true);
  }
}
