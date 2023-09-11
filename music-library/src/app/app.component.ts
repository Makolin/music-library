import { Component, HostListener } from '@angular/core';

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
  public checkSaveData() {}
}
