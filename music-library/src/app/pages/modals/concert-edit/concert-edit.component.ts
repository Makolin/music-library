import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatOption, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';

import { ModalType } from '../../../models/enums/modal-type.enum';
import { MusicalConcert } from '../../../models/musical-concert.model';
import { DataFilterService } from '../../../services/data-filter.service';
import { DataHandlingService } from '../../../services/data-handling.service';
import { ModalStateService } from '../../../services/modal-state.service';
import { ModalHeaderComponent } from '../../shared/modal-header/modal-header.component';

/**
 * Модальное окно для создания/редактирования музыкального концерта
 */
@Component({
  selector: 'app-concert-edit',
  standalone: true,
  imports: [
    ModalHeaderComponent,
    MatButton,
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatOption,
    MatError,
    NgIf,
    NgFor,
    MatSelect,
    MatCheckbox,
    MatDatepickerModule,
    MatInputModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './concert-edit.component.html',
  styleUrls: ['./concert-edit.component.scss']
})
export class ConcertEditComponent {
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
      'concertGroupId': new FormControl(this._modalStateService.selectedMusicalConcert?.groupId ?? '', Validators.required),
      'concertDate': new FormControl(this._modalStateService.selectedMusicalConcert?.date ?? '', Validators.required),
      'concertArea': new FormControl(this._modalStateService.selectedMusicalConcert?.area ?? '', Validators.required),
      'concertIsBoughtTickets': new FormControl(this._modalStateService.selectedMusicalConcert?.isBoughtTickets ?? false),
      'concertIsTribute': new FormControl(this._modalStateService.selectedMusicalConcert?.isTribute ?? false)
    });

    this.setTitleModal();
  }

  /**
   * Закрытие модального окна
   */
  public closeWindow(): void {
    this._modalStateService.setStateModal(ModalType.MusicalConcert, false);
  }

  /**
   * Создание или редактирование музыкального концерта
   * TODO: Добавить проверку по дате
   */
  public editMusicalConcert(): void {
    let lastIndex = 1;

    if (this.dataHandlingService.allMusicalConcert.length != 0) {
      lastIndex = this.dataHandlingService.allMusicalConcert.reduce((first, second) => first.id > second.id ? first : second).id;
      if (lastIndex == null) {
        return;
      }
    }

    if (this._modalStateService.selectedMusicalConcert == null) {
      this.dataHandlingService.allMusicalConcert.push(new MusicalConcert(
        ++lastIndex,
        this.form.value.concertGroupId,
        this.form.value.concertDate,
        this.form.value.concertArea,
        false,
        this.form.value.concertIsBoughtTickets,
        this.form.value.concertIsTribute
      ));
    } else {
      this._modalStateService.selectedMusicalConcert.groupId = this.form.value.concertGroupId;
      this._modalStateService.selectedMusicalConcert.date = this.form.value.concertDate;
      this._modalStateService.selectedMusicalConcert.area = this.form.value.concertArea.trim();
      this._modalStateService.selectedMusicalConcert.isBoughtTickets = this.form.value.concertIsBoughtTickets;
      this._modalStateService.selectedMusicalConcert.isTribute = this.form.value.concertIsTribute;
    }

    this._dataFilterService.sortMusicConcerts();
    this.closeWindow();
  }

  /**
   * Установка текста модального окна
   */
  private setTitleModal(): void {
    this.titleModal = this._modalStateService.selectedMusicalConcert == null
      ? 'Создание концерта'
      : 'Редактирование концерта';
  }
}
