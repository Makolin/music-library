import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ModalType } from '../../../enums/modal-type.enum';
import { MusicalGenre } from '../../../models/musical-genre.model';
import { DataHandlingService } from '../../../services/data-handling.service';
import { ModalStateService } from '../../../services/modal-state.service';

/**
 * Модальное окно создания/изменения жанра
 */
@Component({
  selector: 'app-genre-edit',
  standalone: true,
  imports: [MatFormField, MatLabel, ReactiveFormsModule, MatInputModule],
  templateUrl: './genre-edit.component.html',
  styleUrls: ['./genre-edit.component.scss']
})
export class GenreEditComponent {
  /** Форма для заполнения */
  public createForm: FormGroup;

  /** Получение заголовка модального окна */
  public get titleModal(): string {
    return this._modalStateService.selectedMusicalGenre == null
      ? 'Создание жанра'
      : 'Редактирование жанра';
  }

  public constructor(
    private _modalStateService: ModalStateService,
    private _dataHandlingService: DataHandlingService
  ) {
    this.createForm = new FormGroup({
      'groupGenre': new FormControl(this._modalStateService.selectedMusicalGenre?.name ?? '', Validators.required)
    });
  }

  /**
   * Закрытие модального окна
   */
  public closeWindow(): void {
    this._modalStateService.setStateModal(ModalType.MusicalGenre, false);
  }

  /**
   * Создание или редактирование музыкальной группы
   */
  public editMusicalGroup(): void {
    let lastIndex = this._dataHandlingService.allMusicalGroups.reduce((first, second) => first.id > second.id ? first : second).id;
    if (lastIndex == null) {
      return;
    }

    if (this._modalStateService.selectedMusicalGenre == null) {
      this._dataHandlingService.allMusicalGenres.push(
        new MusicalGenre(++lastIndex, this.createForm.value.groupGenre)
      );
    } else {
      this._modalStateService.selectedMusicalGenre.name = this.createForm.value.groupGenre;
    }

    this.closeWindow();
  }
}
