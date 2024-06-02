import { Component } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

import { DataRequestService } from '../../services/data-request.service';

/**
 * Компонент с заголовком страницы
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatTooltip],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public constructor(
    public dataRequestService: DataRequestService
  ) { }

  /**
   * Создание ссылки
   */
  public createLink(): void {
    this.dataRequestService.createLinkForDownload();
  }
}
