import { Component } from '@angular/core';

import { DataActionsService } from 'src/app/services/data-actions.service';

/**
 * Компонент для вывода информации о группах
 */
@Component({
  selector: 'app-musical-groups',
  templateUrl: './musical-groups.component.html',
  styleUrls: ['./musical-groups.component.scss']
})
export class MusicalGroupsComponent {
  public constructor(
    public dataActionsService: DataActionsService
  ) { }
}
