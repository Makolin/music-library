import { Component } from '@angular/core';

import { DataRequestService } from 'src/app/services/data-request.service';

/**
 * Компонент для вывода основной страницы
 */
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public constructor(public dataRequestService: DataRequestService) { }
}