import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

import { DataHandlingService } from '../../../services/data-handling.service';
import { Parameter } from './../../../models/parameter.model';
import { TableRowComponent } from './table-row/table-row.component';

/**
 * Компонент для вывода таблицы
 */
@Component({
  selector: 'app-main-table',
  standalone: true,
  imports: [TableRowComponent, NgFor],
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss']
})
export class MainTableComponent {
  /** Список параметров */
  public mainParameters: Parameter[] = [];

  /** Количество музыкальных групп */
  private _countGroups: number = 0;

  /** Количество альбомов */
  private _countAlbums: number = 0;

  /** Количество треков */
  private _countTracks: number = 0;

  public constructor(
    private _dataHandlingService: DataHandlingService
  ) {
    this.calculateCounts();
    this.addParameters();
  }

  /**
   * Заполнение параметров
   */
  public addParameters(): void {
    if (this.mainParameters.length == 0) {
      this.mainParameters.push(new Parameter('Количество исполнителей', this._countGroups.toString()));
      this.mainParameters.push(new Parameter('Количество альбомов', this._countAlbums.toString()));
      this.mainParameters.push(new Parameter('Количество треков', this._countTracks.toString()));
    }
  }

  /**
   * Подсчет количества
   */
  private calculateCounts(): void {
    this._countGroups = 0;
    this._countAlbums = 0;
    this._countTracks = 0;

    // Заполняем данными
    this._countGroups = this._dataHandlingService.allMusicalGroups.length;
    this._dataHandlingService.allMusicalGroups.forEach(group => {
      this._countAlbums += group.countAlbums;
      this._countTracks += group.countTracks;
    });
  }
}
