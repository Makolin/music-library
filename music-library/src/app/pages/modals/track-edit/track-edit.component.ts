import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatOption } from '@angular/material/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';

import { ModalType } from '../../../models/enums/modal-type.enum';
import { MusicalTrack } from '../../../models/musical-track.model';
import { validatorUniqueTrack } from '../../../models/validator/validator-unique-track';
import { DataHandlingService } from '../../../services/data-handling.service';
import { ModalStateService } from '../../../services/modal-state.service';
import { ModalHeaderComponent } from '../../shared/modal-header/modal-header.component';

/**
 * Модальное окно создания/изменения трека
 */
@Component({
  selector: 'app-track-edit',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    ReactiveFormsModule,
    MatInputModule,
    ModalHeaderComponent,
    NgIf,
    MatOption,
    NgFor,
    MatSelect,
    MatCheckbox
  ],
  templateUrl: './track-edit.component.html',
  styleUrls: ['./track-edit.component.scss']
})
export class TrackEditComponent {
  /** Форма для заполнения */
  public form: FormGroup;

  /** Алиас типа модального окна */
  public enumModalType = ModalType;

  /** Заголовок модального окна */
  public titleModal: string = '';

  public constructor(
    private _modalStateService: ModalStateService,
    public dataHandlingService: DataHandlingService
  ) {
    this.form = new FormGroup({
      'trackSerialNumber': new FormControl(this._modalStateService.selectedMusicalTrack?.serialNumber ?? '', Validators.required),
      'trackName': new FormControl(this._modalStateService.selectedMusicalTrack?.name ?? '', Validators.required),
      'trackAlbumId': new FormControl(this._modalStateService.selectedMusicalTrack?.albumId ?? '', Validators.required),
      'trackIsFavorite': new FormControl(this._modalStateService.selectedMusicalTrack?.isFavorite ?? false)
    }, { validators: validatorUniqueTrack(this.dataHandlingService) }
    );

    this.setTitleModalText();
  }

  /**
   * Закрытие модального окна
   */
  public closeWindow(): void {
    this._modalStateService.setStateModal(ModalType.MusicalTrack, false);
  }

  /**
   * Создание или редактирование музыкальной группы
   */
  public editMusicalTrack(): void {
    const lastIndex = this.dataHandlingService.allMusicalAlbums.reduce((first, second) => first.id > second.id ? first : second).id;
    if (lastIndex == null) {
      return;
    }

    if (this._modalStateService.selectedMusicalTrack == null) {
      this.addNewTrack(lastIndex);
    } else {
      this._modalStateService.selectedMusicalTrack.serialNumber = this.form.value.trackSerialNumber;
      this._modalStateService.selectedMusicalTrack.name = this.form.value.trackName.trim();
      this._modalStateService.selectedMusicalTrack.albumId = this.form.value.trackAlbumId;
      this._modalStateService.selectedMusicalTrack.isFavorite = this.form.value.trackIsFavorite ?? false;
    }

    this.dataHandlingService.setAllTracks();
    this.closeWindow();
  }

  /**
   * Установка текста модального окна
   */
  private setTitleModalText(): void {
    this.titleModal = this._modalStateService.selectedMusicalTrack == null
      ? 'Создание трека'
      : 'Редактирование трека';
  }

  /**
   * Добавление нового трека
   * @param lastIndex последний индекс
   */
  private addNewTrack(lastIndex: number): void {
    const findAlbum = this.dataHandlingService.allMusicalAlbums
      .find(element => element.id == this.form.value.trackAlbumId);

    if (findAlbum == null) {
      return;
    }

    findAlbum.tracks.push(
      new MusicalTrack(
        ++lastIndex,
        this.form.value.trackSerialNumber,
        this.form.value.trackAlbumId,
        this.form.value.trackName.trim(),
        this.form.value.trackIsFavorite
      )
    );
  }
}
