import { Component, HostListener } from '@angular/core';

import { ModalStateService } from './services/modal-state.service';
import { ModalType } from './enums/modal-type.enum';

/**
 * Основной компонент приложения
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * TODO: При перезагрузке страницы, уточнять насчет выхода
   */
  @HostListener('window:beforeunload')
  public checkSaveData() { };

  /** Алиас типов модальных окон */
  public ModalType = ModalType;

  public constructor(public modalStateService: ModalStateService) { }
}
