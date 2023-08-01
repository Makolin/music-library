import { Component } from '@angular/core';

import { DataActionsService } from './services/data-actions.service';

/**
 * Основной компонент приложения
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public constructor(
    dataActionsService: DataActionsService
  ) {
    dataActionsService.readDataMusicalGroups();
  }
}
