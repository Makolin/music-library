import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';

import { ModalType } from '../../models/enums/modal-type.enum';
import { MusicalConcert } from '../../models/musical-concert.model';
import { DataHandlingService } from '../../services/data-handling.service';
import { DataRequestService } from '../../services/data-request.service';
import { ModalStateService } from '../../services/modal-state.service';
import { ConcertsRowComponent } from './concerts-row/concerts-row.component';

/**
 * Компонент для вывода информации о концертах
 */
@Component({
  selector: 'app-musical-concerts',
  standalone: true,
  imports: [MatButton, ConcertsRowComponent, NgFor],
  templateUrl: './musical-concerts.component.html',
  styleUrls: ['./musical-concerts.component.scss']
})
export class MusicalConcertsComponent implements OnInit {
  /** Идентификатор последнего прошедшего концерта */
  public isLastPastConcert: number = 0;

  public constructor(
    public dataHandlingService: DataHandlingService,
    public dataRequestService: DataRequestService,
    private _modalStateService: ModalStateService
  ) { }

  public ngOnInit(): void {
    this.findIsLastPastConcert();
  }

  /**
   * Открытие модального окна для редактирования концерта
   * @param musicalConcert музыкальный жанр
   */
  public openModalEditConcert(musicalConcert: MusicalConcert | null): void {
    this._modalStateService.selectedMusicalConcert = musicalConcert;
    this._modalStateService.setStateModal(ModalType.MusicalConcert, true);
  }

  /**
   * Скачать новый файл с концертами
   */
  public downloadConcerts(): void {
    const sendData: MusicalConcert[] = [];
    this.dataHandlingService.allMusicalConcert.forEach(element => {
      sendData.push(element.cloneMusicalConcert());
    });

    this.dataRequestService.createLinkForDownload(sendData);
  }

  /**
   * Нахождение последнего прошедшего концерта
   */
  private findIsLastPastConcert(): void {
    this.isLastPastConcert = this.dataHandlingService.allMusicalConcert.filter(element => element.isPast)[0]?.id;
  }
}
