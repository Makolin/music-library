import { Component } from '@angular/core';

import { Parameter } from 'src/app/models/parameter.model';
import { DataActionsService } from 'src/app/services/data-actions.service';

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

  public constructor(private dataActionsService: DataActionsService) {
    this.addParameters();
  }

  /**
   * Заполнение параметров
   */
  public addParameters(): void {
    if (this.mainParameters.length == 0) {
      this.mainParameters.push(new Parameter('Количество исполнителей', this.dataActionsService.allMusicalGroups.length.toString()));
      this.mainParameters.push(new Parameter('Количество альбомов', '130'));
      this.mainParameters.push(new Parameter('Количество треков', '11'));
    }
  }
}
