import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatTooltip } from '@angular/material/tooltip';

import { MusicalGroup } from '../../../models/musical-group.model';
import { CountTracksPipe } from '../../../pipe/count-tracks.pipe';
import { DataHandlingService } from '../../../services/data-handling.service';

/**
 * Компонент для выводы строки с музыкальной группой
 */
@Component({
  selector: 'app-groups-row',
  standalone: true,
  imports: [CountTracksPipe, MatCheckbox, MatTooltip],
  templateUrl: './groups-row.component.html',
  styleUrls: ['./groups-row.component.scss']
})
export class GroupsRowComponent implements OnInit {
  /** Музыкальная группа */
  @Input()
  public musicalGroup!: MusicalGroup;

  /** Выбранная группа */
  @Output()
  public selectedGroup = new EventEmitter<MusicalGroup>();

  /** Наименование жанра */
  public genreName: string = '';

  public constructor(
    private _dataHandlingService: DataHandlingService
  ) { }

  public ngOnInit(): void {
    this.genreName = this._dataHandlingService.allMusicalGenres
      .find(element => element.id == this.musicalGroup.genreId)?.name ?? '';
  }

  /**
   * Установка статуса любимого трека
   * @param status статус
   */
  public setStatusBrokeUpGroup(status: boolean): void {
    this.musicalGroup.isBrokeUp = status;
  }

  /**
   * Отправка выбранной группы
   */
  public sendSelectedGroup(): void {
    this.selectedGroup.emit(this.musicalGroup);
  }

  /**
   * Открытие диалогово окна подтверждения удаления
   */
  public openDialogDeleteGroup(): void {
    alert('В разработке');
  }
}
