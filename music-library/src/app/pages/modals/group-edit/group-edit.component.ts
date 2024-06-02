import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOption, MatSelect } from '@angular/material/select';

import { ModalType } from '../../../enums/modal-type.enum';
import { MusicalGroup } from '../../../models/musical-group.model';
import { DataFilterService } from '../../../services/data-filter.service';
import { DataHandlingService } from '../../../services/data-handling.service';
import { ModalStateService } from '../../../services/modal-state.service';

/**
 * Модальное окно создания/изменения группы
 */
@Component({
  selector: 'app-group-edit',
  standalone: true,
  imports: [MatFormField, MatLabel, MatSelect, MatOption, ReactiveFormsModule, NgFor, MatInputModule],
  templateUrl: './group-edit.component.html',
  styleUrls: ['./group-edit.component.scss']
})
export class GroupEditComponent {
  /** Форма для заполнения */
  public createForm: FormGroup;

  /** Получение заголовка модального окна */
  public get titleModal(): string {
    return this._modalStateService.selectedMusicalGroup == null
      ? 'Создание группы'
      : 'Редактирование группы';
  }

  public constructor(
    public dataHandlingService: DataHandlingService,
    private _modalStateService: ModalStateService,
    private _dataFilterService: DataFilterService
  ) {
    this.createForm = new FormGroup({
      'groupName': new FormControl(this._modalStateService.selectedMusicalGroup?.name ?? '', Validators.required),
      'groupGenre': new FormControl(this._modalStateService.selectedMusicalGroup?.genreId ?? '', Validators.required)
    });
  }

  /**
   * Закрытие модального окна
   */
  public closeWindow(): void {
    this._modalStateService.setStateModal(ModalType.MusicalGroup, false);
    this._dataFilterService.sortMusicGroups();
  }

  /**
   * Создание или редактирование музыкальной группы
   */
  public editMusicalGroup(): void {
    let lastIndex = this.dataHandlingService.allMusicalGroups.reduce((first, second) => first.id > second.id ? first : second).id;
    if (lastIndex == null) {
      return;
    }

    if (this._modalStateService.selectedMusicalGroup == null) {
      this.dataHandlingService.allMusicalGroups.push(
        new MusicalGroup(++lastIndex, this.createForm.value.groupName, this.createForm.value.groupGenre, [])
      );
    } else {
      this._modalStateService.selectedMusicalGroup.name = this.createForm.value.groupName;
      this._modalStateService.selectedMusicalGroup.genreId = this.createForm.value.groupGenre;
    }

    this.closeWindow();
  }
}
