import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

import { MusicalAlbum } from '../../../models/musical-album.model';
import { DataHandlingService } from '../../../services/data-handling.service';

/**
 * Компонент для вывода строки с альбомом
 */
@Component({
  selector: 'app-albums-row',
  standalone: true,
  imports: [MatTooltip],
  templateUrl: './albums-row.component.html',
  styleUrls: ['./albums-row.component.scss']
})
export class AlbumsRowComponent implements OnInit {
  /** Музыкальный альбом */
  @Input()
  public musicalAlbum!: MusicalAlbum;

  /** Выбранный альбом */
  @Output()
  public selectedAlbum = new EventEmitter<MusicalAlbum>();

  /** Наименование группы */
  public groupName: string = '';

  public constructor(
    private _dataHandlingService: DataHandlingService
  ) { }

  public ngOnInit(): void {
    this.groupName = this._dataHandlingService.allMusicalGroups
      .find(element => element.id == this.musicalAlbum.groupId)?.name ?? '';
  }

  /**
   * Отправка выбранного альбома
   */
  public sendSelectedAlbum(): void {
    this.selectedAlbum.emit(this.musicalAlbum);
  }

  /**
   * Открытие диалогово окна подтверждения удаления
   */
  public openDialogDeleteAlbum(): void {
    alert('В разработке');
  }
}
