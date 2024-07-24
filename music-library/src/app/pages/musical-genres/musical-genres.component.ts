import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { ModalType } from '../../models/enums/modal-type.enum';
import { MusicalGenre } from '../../models/musical-genre.model';
import { DataHandlingService } from '../../services/data-handling.service';
import { ModalStateService } from '../../services/modal-state.service';
import { GenresRowComponent } from './genres-row/genres-row.component';
import { DataRequestService } from '../../services/data-request.service';

/**
 * Компонент для вывода информации о жанрах
 */
@Component({
  selector: 'app-musical-genres',
  standalone: true,
  imports: [NgFor, GenresRowComponent, MatButtonModule],
  templateUrl: './musical-genres.component.html',
  styleUrls: ['./musical-genres.component.scss']
})
export class MusicalGenresComponent {
  public constructor(
    public dataHandlingService: DataHandlingService,
    public dataRequestService: DataRequestService,
    private _modalStateService: ModalStateService
  ) { }

  /**
   * Открытие модального окна для редактирования жанра
   * @param musicalGenre музыкальный жанр
   */
  public openModalEditGenre(musicalGenre: MusicalGenre | null): void {
    this._modalStateService.selectedMusicalGenre = musicalGenre;
    this._modalStateService.setStateModal(ModalType.MusicalGenre, true);
  }

  /**
   * Скачать новый файл с жанрами
   */
  public downloadGenres(): void {
    this.dataRequestService.createLinkForDownload(this.dataHandlingService.allMusicalGenres);
  }
}
