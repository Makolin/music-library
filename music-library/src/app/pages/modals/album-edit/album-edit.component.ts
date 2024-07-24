import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatOption } from '@angular/material/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';

import { ModalType } from '../../../models/enums/modal-type.enum';
import { MusicalAlbum } from '../../../models/musical-album.model';
import { validatorUniqueAlbum } from '../../../models/validator/validator-unique-album';
import { DataFilterService } from '../../../services/data-filter.service';
import { DataHandlingService } from '../../../services/data-handling.service';
import { ModalStateService } from '../../../services/modal-state.service';
import { ModalHeaderComponent } from '../../shared/modal-header/modal-header.component';

/**
 * Модальное окно для создания/редактирования музыкального альбома
 */
@Component({
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    ReactiveFormsModule,
    MatInputModule,
    MatOption,
    NgFor,
    MatSelect,
    ModalHeaderComponent,
    MatCheckbox,
    NgIf
  ],
  selector: 'app-album-edit',
  templateUrl: './album-edit.component.html',
  styleUrls: ['./album-edit.component.scss']
})
export class AlbumEditComponent {
  /** Форма для заполнения */
  public form: FormGroup;

  /** Алиас типа модального окна */
  public enumModalType = ModalType;

  /** Заголовок модального окна */
  public titleModal: string = '';

  public constructor(
    public dataHandlingService: DataHandlingService,
    public modalStateService: ModalStateService,
    private _dataFilterService: DataFilterService
  ) {
    this.form = new FormGroup({
      'albumName': new FormControl(this.modalStateService.selectedMusicalAlbum?.name ?? '', Validators.required),
      'albumGroupId': new FormControl(this.modalStateService.selectedMusicalAlbum?.groupId ?? '', Validators.required),
      'albumYear': new FormControl(this.modalStateService.selectedMusicalAlbum?.year ?? '', Validators.required),
      'albumIsListened': new FormControl(this.modalStateService.selectedMusicalAlbum?.isListened ?? false),
    }, { validators: validatorUniqueAlbum(this.dataHandlingService) }
    );

    this.setTitleModalText();
  }

  /**
   * Закрытие модального окна
   */
  public closeWindow(): void {
    this.modalStateService.setStateModal(ModalType.MusicalAlbum, false);
  }

  /**
   * Создание или редактирование музыкального альбома
   */
  public editMusicalAlbum(): void {
    const lastIndex = this.dataHandlingService.allMusicalAlbums.reduce((first, second) => first.id > second.id ? first : second).id;
    if (lastIndex == null) {
      return;
    }

    if (this.modalStateService.selectedMusicalAlbum == null) {
      this.addNewAlbum(lastIndex);
    } else {
      this.modalStateService.selectedMusicalAlbum.name = this.form.value.albumName;
      this.modalStateService.selectedMusicalAlbum.groupId = this.form.value.albumGroupId;
      this.modalStateService.selectedMusicalAlbum.year = this.form.value.albumYear.trim();
      this.modalStateService.selectedMusicalAlbum.isListened = this.form.value.albumIsListened;
    }

    this.dataHandlingService.setAllAlbums(this._dataFilterService);
    this.closeWindow();
  }

  /**
   * Установка текста модального окна
   */
  private setTitleModalText(): void {
    this.titleModal = this.modalStateService.selectedMusicalAlbum == null
      ? 'Создание альбома'
      : 'Редактирование альбома';
  }

  /**
   * Добавление нового альбома
   * @param lastIndex последний индекс
   */
  private addNewAlbum(lastIndex: number): void {
    const findGroup = this.dataHandlingService.allMusicalGroups
      .find(element => element.id == this.form.value.albumGroupId);

    if (findGroup == null) {
      return;
    }

    findGroup.albums.push(
      new MusicalAlbum(
        ++lastIndex,
        this.form.value.albumGroupId,
        this.form.value.albumName.trim(),
        this.form.value.albumYear,
        this.form.value.albumIsListened ?? false,
        []
      )
    );
  }
}
