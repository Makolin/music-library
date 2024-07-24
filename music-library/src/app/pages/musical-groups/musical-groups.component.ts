import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';

import { ModalType } from '../../models/enums/modal-type.enum';
import { MusicalGroup } from '../../models/musical-group.model';
import { CountTracksPipe } from '../../pipe/count-tracks.pipe';
import { DataHandlingService } from '../../services/data-handling.service';
import { ModalStateService } from './../../services/modal-state.service';
import { GroupsRowComponent } from './groups-row/groups-row.component';

/**
 * Компонент для вывода информации о группах
 */
@Component({
  selector: 'app-musical-groups',
  standalone: true,
  imports: [NgFor, CountTracksPipe, GroupsRowComponent, MatButton],
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
