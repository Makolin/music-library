import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltip } from '@angular/material/tooltip';

import { MusicalGenre } from '../../../models/musical-genre.model';
import { DataHandlingService } from '../../../services/data-handling.service';

/**
 * Компонент для вывода строки с жанром
 */
@Component({
  selector: 'app-genres-row',
  standalone: true,
  imports: [MatTooltip],
  templateUrl: './genres-row.component.html',
  styleUrls: ['./genres-row.component.scss']
})
export class GenresRowComponent implements OnInit {
  /** Текущий жанр */
  @Input()
  public musicalGenre!: MusicalGenre;

  /** Выбранный жанр */
  @Output()
  public selectedGenre = new EventEmitter<MusicalGenre>();

  /** Текущее количество групп */
  public countGroups: number = 0;

  public constructor(
    public dialog: MatDialog,
    private _dataHandlingService: DataHandlingService
  ) { }

  public ngOnInit(): void {
    this.calculateCountGroups();
  }

  /**
   * Подсчитывает количество групп с текущим жанром
   */
  private calculateCountGroups(): void {
    this.countGroups = this._dataHandlingService.allMusicalGroups
      .filter(element => element.genreId == this.musicalGenre.id).length;
  }

  /**
   * Отправка выбранного жанра
   */
  public sendSelectedGenre(): void {
    this.selectedGenre.emit(this.musicalGenre);
  }

  /**
   * Открытие диалогово окна подтверждения удаления
   */
  public openDialogDeleteGenre(): void {
    alert('В разработке');
  }
}
