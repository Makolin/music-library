import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ModalType } from '../../../models/enums/modal-type.enum';
import { MusicalGenre } from '../../../models/musical-genre.model';
import { validatorUniqueGenre } from '../../../models/validator/validator-unique-genre';
import { DataFilterService } from '../../../services/data-filter.service';
import { DataHandlingService } from '../../../services/data-handling.service';
import { ModalStateService } from '../../../services/modal-state.service';
import { ModalHeaderComponent } from '../../shared/modal-header/modal-header.component';

/**
 * Модальное окно создания/изменения жанра
 */
@Component({
  selector: 'app-genre-edit',
  standalone: true,
  imports: [MatFormField, MatLabel, ReactiveFormsModule, MatInputModule, ModalHeaderComponent, NgIf],
  templateUrl: './genre-edit.component.html',
  styleUrls: ['./genre-edit.component.scss']
})
export class GenreEditComponent {
  /** Форма для заполнения */
  public form: FormGroup;

  /** Алиас типа модального окна */
  public enumModalType = ModalType;

  /** Заголовок модального окна */
  public titleModal: string = '';

  public constructor(
    private _modalStateService: ModalStateService,
    private _dataHandlingService: DataHandlingService,
    private _dataFilterService: DataFilterService
  ) {
    this.form = new FormGroup({
      'genre': new FormControl(
        this._modalStateService.selectedMusicalGenre?.name ?? '',
        [Validators.required, validatorUniqueGenre(this._dataHandlingService)]
      )
    });

    this.setTitleModalText();
  }

  /**
   * Закрытие модального окна
   */
  public closeWindow(): void {
    this._modalStateService.setStateModal(ModalType.MusicalGenre, false);
  }

  /**
   * Создание или редактирование музыкального жанра
   */
  public editMusicalGenre(): void {
    let lastIndex = this._dataHandlingService.allMusicalGenres.reduce((first, second) => first.id > second.id ? first : second).id;
    if (lastIndex == null) {
      return;
    }

    if (this._modalStateService.selectedMusicalGenre == null) {
      this._dataHandlingService.allMusicalGenres.push(new MusicalGenre(++lastIndex, this.form.value.genre.trim()));
    } else {
      this._modalStateService.selectedMusicalGenre.name = this.form.value.genre.trim();
    }

    this._dataFilterService.sortMusicGenres();
    this.closeWindow();
  }

  /**
   * Установка текста модального окна
   */
  private setTitleModalText(): void {
    this.titleModal = this._modalStateService.selectedMusicalGenre == null
      ? 'Создание жанра'
      : 'Редактирование жанра';
  }
}
