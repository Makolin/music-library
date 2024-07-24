import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOption, MatSelect } from '@angular/material/select';

import { ModalType } from '../../../models/enums/modal-type.enum';
import { MusicalGroup } from '../../../models/musical-group.model';
import { validatorUniqueGroupName } from '../../../models/validator/validator-unique-group-name';
import { DataFilterService } from '../../../services/data-filter.service';
import { DataHandlingService } from '../../../services/data-handling.service';
import { ModalStateService } from '../../../services/modal-state.service';
import { ModalHeaderComponent } from '../../shared/modal-header/modal-header.component';

/**
 * Модальное окно создания/изменения группы
 */
@Component({
  selector: 'app-group-edit',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatSelect,
    MatOption,
    ReactiveFormsModule,
    NgFor,
    MatInputModule,
    MatCheckbox,
    ModalHeaderComponent,
    NgIf
  ],
  templateUrl: './group-edit.component.html',
  styleUrls: ['./group-edit.component.scss']
})
export class GroupEditComponent {
  /** Форма для заполнения */
  public form: FormGroup;

  /** Алиас типа модального окна */
  public enumModalType = ModalType;

  /** Заголовок модального окна */
  public titleModal: string = '';

  public constructor(
    public dataHandlingService: DataHandlingService,
    private _modalStateService: ModalStateService,
    private _dataFilterService: DataFilterService
  ) {
    this.form = new FormGroup({
      'groupName': new FormControl(this._modalStateService.selectedMusicalGroup?.name ?? '', Validators.required),
      'groupGenreId': new FormControl(this._modalStateService.selectedMusicalGroup?.genreId ?? '', Validators.required),
      'groupIsBrokeUp': new FormControl(this._modalStateService.selectedMusicalGroup?.isBrokeUp ?? false)
    }, { validators: validatorUniqueGroupName(this.dataHandlingService, this._modalStateService.selectedMusicalGroup) }
    );

    this.setTitleModalText();
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
        new MusicalGroup(++lastIndex, this.form.value.groupName.trim(), this.form.value.groupGenreId, this.form.value.groupIsBrokeUp, [])
      );
    } else {
      this._modalStateService.selectedMusicalGroup.name = this.form.value.groupName.trim();
      this._modalStateService.selectedMusicalGroup.genreId = this.form.value.groupGenreId;
      this._modalStateService.selectedMusicalGroup.isBrokeUp = this.form.value.groupIsBrokeUp;
    }

    this.closeWindow();
  }

  /**
   * Установка текста модального окна
   */
  private setTitleModalText(): void {
    this.titleModal = this._modalStateService.selectedMusicalGroup == null
      ? 'Создание группы'
      : 'Редактирование группы';
  }
}
