import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';

import { ModalType } from '../../models/enums/modal-type.enum';
import { MusicalAlbum } from '../../models/musical-album.model';
import { DataHandlingService } from '../../services/data-handling.service';
import { ModalStateService } from '../../services/modal-state.service';
import { AlbumsRowComponent } from './albums-row/albums-row.component';

/**
 * Компонент для вывода информации об альбомах
 */
@Component({
  selector: 'app-musical-albums',
  standalone: true,
  imports: [NgFor, AlbumsRowComponent, MatButton],
  templateUrl: './musical-albums.component.html',
  styleUrls: ['./musical-albums.component.scss']
})
export class MusicalAlbumsComponent {
  public constructor(
    public dataHandlingService: DataHandlingService,
    private _modalStateService: ModalStateService
  ) { }

  /**
   * Открытие модального окна для редактирования альбома
   * @param musicalAlbum музыкальный альбом
   */
  public openModalEditAlbum(musicalAlbum: MusicalAlbum | null): void {
    this._modalStateService.selectedMusicalAlbum = musicalAlbum;
    this._modalStateService.setStateModal(ModalType.MusicalAlbum, true);
  }
}
