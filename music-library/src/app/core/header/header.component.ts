import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { DataRequestService } from '../../services/data-request.service';

/**
 * Компонент с заголовком страницы
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public constructor(public dataRequestService: DataRequestService, private router: Router) { }

  public createLink() {
    this.dataRequestService.createLinkForDownload();
  }
}