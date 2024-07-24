import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';

import { ModalType } from '../../models/enums/modal-type.enum';
import { MusicalTrack } from '../../models/musical-track.model';
import { DataHandlingService } from '../../services/data-handling.service';
import { ModalStateService } from '../../services/modal-state.service';
import { TracksRowComponent } from './tracks-row/tracks-row.component';

/**
 * Компонент для вывода информации о треках
 */
@Component({
  selector: 'app-musical-tracks',
  standalone: true,
  imports: [NgFor, TracksRowComponent, MatButton],
  templateUrl: './musical-tracks.component.html',
  styleUrls: ['./musical-tracks.component.scss']
})
export class MusicalTracksComponent {
  public constructor(
    public dataHandlingService: DataHandlingService,
    private _modalStateService: ModalStateService
  ) { }

  /**
   * Открытие модального окна для редактирования жанра
   * @param musicalTrack музыкальный трек
   */
  public openModalEditTrack(musicalTrack: MusicalTrack | null): void {
    this._modalStateService.selectedMusicalTrack = musicalTrack;
    this._modalStateService.setStateModal(ModalType.MusicalTrack, true);
  }
}
