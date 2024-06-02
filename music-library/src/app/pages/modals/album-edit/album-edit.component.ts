import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';

import { ModalType } from '../../../enums/modal-type.enum';
import { MusicalAlbum } from '../../../models/musical-album.model';
import { DataHandlingService } from '../../../services/data-handling.service';
import { ModalStateService } from '../../../services/modal-state.service';
import { DataFilterService } from '../../../services/data-filter.service';

/**
 * Модальное окно для создания и редактирования музыкального альбома
 */
@Component({
  standalone: true,
  imports: [MatFormField, MatLabel, ReactiveFormsModule, MatInputModule, MatOption, NgFor, MatSelect],
  selector: 'app-album-edit',
  templateUrl: './album-edit.component.html',
  styleUrls: ['./album-edit.component.scss']
})
export class AlbumEditComponent {
  /** Форма для заполнения */
  public createForm: FormGroup;

  /** Получение заголовка модального окна */
  public get titleModal(): string {
    return this._modalStateService.selectedMusicalGroup == null
      ? 'Создание альбома'
      : 'Редактирование альбома';
  }

  public constructor(
    public dataHandlingService: DataHandlingService,
    private _modalStateService: ModalStateService,
    private _dataFilterService: DataFilterService
  ) {
    this.createForm = new FormGroup({
      'albumName': new FormControl(this._modalStateService.selectedMusicalAlbum?.name ?? '', Validators.required),
      'albumGroupName': new FormControl(this._modalStateService.selectedMusicalAlbum?.groupId ?? '', Validators.required),
      'albumYear': new FormControl(this._modalStateService.selectedMusicalAlbum?.year ?? '', Validators.required)
    });
  }

  /**
   * Закрытие модального окна
   */
  public closeWindow(): void {
    this._modalStateService.setStateModal(ModalType.MusicalAlbum, false);
  }

  /**
   * Создание или редактирование музыкального альбома
   */
  public editMusicalAlbum(): void {
    const lastIndex = this.dataHandlingService.allMusicalAlbums.reduce((first, second) => first.id > second.id ? first : second).id;
    if (lastIndex == null) {
      return;
    }

    if (this._modalStateService.selectedMusicalAlbum == null) {
      this.addNewAlbum(lastIndex);
    } else {
      this._modalStateService.selectedMusicalAlbum.name = this.createForm.value.albumName;
      this._modalStateService.selectedMusicalAlbum.groupId = this.createForm.value.albumGroupName;
      this._modalStateService.selectedMusicalAlbum.year = this.createForm.value.albumYear;
    }

    this.dataHandlingService.setAllAlbums(this._dataFilterService);
    this.closeWindow();
  }

  /**
   * Добавление нового альбома
   * @param lastIndex последний индекс
   */
  private addNewAlbum(lastIndex: number): void {
    const findGroup = this.dataHandlingService.allMusicalGroups
      .find(element => element.id == this.createForm.value.albumGroupName);

    if (findGroup == null) {
      return;
    }

    findGroup.albums.push(
      new MusicalAlbum(
        ++lastIndex,
        this.createForm.value.albumGroupName,
        this.createForm.value.albumName,
        this.createForm.value.albumYear,
        false,
        []
      )
    );
  }
}
