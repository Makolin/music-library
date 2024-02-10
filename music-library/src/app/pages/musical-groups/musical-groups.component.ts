import { Component, OnInit } from '@angular/core';

import { MusicalGroup } from 'src/app/models/musical-group.model';
import { DataFilterService } from 'src/app/services/data-filter.service';
import { DataRequestService } from '../../services/data-request.service';
import { ModalType } from './../../enums/modal-type.enum';
import { ModalStateService } from './../../services/modal-state.service';

/**
 * Компонент для вывода информации о группах
 */
@Component({
  selector: 'app-musical-groups',
  templateUrl: './musical-groups.component.html',
  styleUrls: ['./musical-groups.component.scss']
})
export class MusicalGroupsComponent implements OnInit {
  public constructor(
    public dataRequestService: DataRequestService,
    public modalStateService: ModalStateService,
    private dataFilterService: DataFilterService
  ) { }

  public ngOnInit(): void {
    this.dataFilterService.sortMusicGroups();
    this.dataFilterService.sortMusicGenres();
  }

  /**
   * Открытие модального окна для создания группы
   */
  public openModalCreateGroup(musicalGroup: MusicalGroup | null): void {
    this.modalStateService.selectedMusicalGroup = musicalGroup;
    this.modalStateService.setStateModal(ModalType.CreateMusicalGroup, true);
  }
}