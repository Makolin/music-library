import { DatePipe, NgIf, registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { Component, EventEmitter, Input, LOCALE_ID, OnInit, Output } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltip } from '@angular/material/tooltip';

import { MusicalConcert } from '../../../models/musical-concert.model';
import { DataHandlingService } from '../../../services/data-handling.service';

registerLocaleData(localeRu);

/**
 * Компонент для вывода строки с концертом
 */
@Component({
  selector: 'app-concerts-row',
  standalone: true,
  imports: [MatTooltip, MatCheckbox, DatePipe, NgIf],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru' }
  ],
  templateUrl: './concerts-row.component.html',
  styleUrls: ['./concerts-row.component.scss']
})
export class ConcertsRowComponent implements OnInit {
  /** Текущий концерт */
  @Input()
  public musicalConcert!: MusicalConcert;

  /** Отображение блока с информацией */
  @Input()
  public isShowInfo: boolean = false;

  /** Выбранный жанр */
  @Output()
  public selectedConcert = new EventEmitter<MusicalConcert>();

  public constructor(
    public dialog: MatDialog,
    private _dataHandlingService: DataHandlingService
  ) { }

  public ngOnInit(): void {
    this._dataHandlingService.setGroupForConcert(this.musicalConcert);
    this._dataHandlingService.setIsPastForConcert(this.musicalConcert);
  }

  /**
   * Отправка выбранного концерта
   */
  public sendSelectedConcert(): void {
    this.selectedConcert.emit(this.musicalConcert);
  }

  /**
   * Установка статуса покупки билета
   * @param status статус
   */
  public setStatusBoughtTicket(status: boolean): void {
    this.musicalConcert.isBoughtTickets = status;
  }

  /**
   * Установка статуса Tribute
   * @param status статус
   */
  public setStatusTribute(status: boolean): void {
    this.musicalConcert.isTribute = status;
  }

  /**
   * Открытие диалогово окна подтверждения удаления
   */
  public openDialogDeleteGenre(): void {
    alert('В разработке');
  }
}
