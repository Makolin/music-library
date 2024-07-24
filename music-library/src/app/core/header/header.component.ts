import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

import { MusicalGroup } from '../../models/musical-group.model';
import { DataHandlingService } from '../../services/data-handling.service';
import { DataRequestService } from '../../services/data-request.service';

/**
 * Компонент с заголовком страницы
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatTooltip, UpperCasePipe],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public constructor(
    public dataRequestService: DataRequestService,
    private _dataHandlingService: DataHandlingService
  ) { }

  /**
   * Создание ссылки
   */
  public createLink(): void {
    const sendMusicalGroup: MusicalGroup[] = [];
    this._dataHandlingService.allMusicalGroups.forEach(element => {
      sendMusicalGroup.push(element.createCopyObject());
    });

    this.dataRequestService.createLinkForDownload(sendMusicalGroup);
  }
}
