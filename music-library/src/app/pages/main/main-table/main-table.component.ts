import { Component } from '@angular/core';

import { Parameter } from './../../../models/parameter.model';
import { DataRequestService } from '../../../services/data-request.service';

/**
 * Компонент для вывода таблицы
 */
@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss']
})
export class MainTableComponent {
  /** Список параметров */
  public mainParameters: Parameter[] = [];

  /** Количество музыкальных групп */
  private countGroups: number = 0;

  /** Количество альбомов */
  private countAlbums: number = 0;

  /** Количество треков */
  private countTracks: number = 0;

  public constructor(private dataRequestService: DataRequestService) {
    this.calculateCounts();
    this.addParameters();
  }

  /**
   * Заполнение параметров
   */
  public addParameters(): void {
    if (this.mainParameters.length == 0) {
      this.mainParameters.push(new Parameter('Количество исполнителей', this.countGroups.toString()));
      this.mainParameters.push(new Parameter('Количество альбомов', this.countAlbums.toString()));
      this.mainParameters.push(new Parameter('Количество треков', this.countTracks.toString()));
    }
  }

  /**
   * Подсчет количества
   */
  private calculateCounts(): void {
    this.countGroups = 0;
    this.countAlbums = 0;
    this.countTracks = 0;

    // Заполняем данными
    this.countGroups = this.dataRequestService.allMusicalGroups.length;
    this.dataRequestService.allMusicalGroups.forEach(group => {
      this.countAlbums += group.countAlbums;
      this.countTracks += group.countTracks;
    });
  }
}
