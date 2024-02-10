import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ModalType } from '../../../enums/modal-type.enum';
import { MusicalGroup } from '../../../models/musical-group.model';
import { DataRequestService } from '../../../services/data-request.service';
import { ModalStateService } from '../../../services/modal-state.service';
import { DataFilterService } from 'src/app/services/data-filter.service';

/**
 * Модальное окно создания/изменения группы
 */
@Component({
  selector: 'app-group-edit',
  templateUrl: './group-edit.component.html',
  styleUrls: ['./group-edit.component.scss']
})
export class GroupEditComponent {
  /** Форма для заполнения */
  public createForm: FormGroup;

  /** Получение заголовка модального окна */
  public get titleModal(): string {
    return this.modalStateService.selectedMusicalGroup == null
      ? 'Создание группы'
      : 'Редактирование группы';
  }

  public constructor(
    public dataRequestService: DataRequestService,
    private modalStateService: ModalStateService,
    private dataFilterService: DataFilterService
  ) {
    this.createForm = new FormGroup({
      "groupName": new FormControl(this.modalStateService.selectedMusicalGroup?.name ?? '', Validators.required),
      "groupGenre": new FormControl(this.modalStateService.selectedMusicalGroup?.genreId ?? '', Validators.required)
    });
  }

  /**
   * Закрытие модального окна
   */
  public closeWindow(): void {
    this.modalStateService.setStateModal(ModalType.CreateMusicalGroup, false);
    this.dataFilterService.sortMusicGroups();
  }

  /**
   * Создание или редактирование музыкальной группы
   */
  public editMusicalGroup(): void {
    let lastIndex = this.dataRequestService.allMusicalGroups.at(-1)?.id;
    if (lastIndex == null) {
      return;
    }

    if (this.modalStateService.selectedMusicalGroup == null) {
      this.dataRequestService.allMusicalGroups.push(new MusicalGroup(lastIndex++, this.createForm.value.groupName, this.createForm.value.groupGenre, []));
    } else {
      this.modalStateService.selectedMusicalGroup.name = this.createForm.value.groupName;
      this.modalStateService.selectedMusicalGroup.genreId = this.createForm.value.groupGenre;
    }

    this.closeWindow();
  }
}