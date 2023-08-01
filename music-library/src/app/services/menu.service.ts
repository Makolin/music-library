import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Menu } from '../enums/menu.enum';

/**
 * Сервис для работы с меню
 */
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  /** Пункт меню по умолчанию */
  private readonly defaultMenuItem = Menu.Main;

  /** Текущий выбранный пункт меню */
  public currentMenuItem = this.defaultMenuItem;

  public constructor(
    private router: Router
  ) {
    this.setRouteApp();
  }

  /**
   * Переключатель для пунктов меню
   */
  public changeMenuItem(newItemMenu: Menu): void {
    if (this.currentMenuItem == newItemMenu) {
      return;
    }

    this.currentMenuItem = newItemMenu;
    this.setRouteApp();
  }

  /**
   * Настройка переадресации для приложения
   */
  private setRouteApp(): void {
    switch (this.currentMenuItem) {
      case Menu.Main:
        this.router.navigate(['/main']);
        break;
      case Menu.MusicalGroups:
        this.router.navigate(['/musical-groups']);
        break;
      case Menu.MusicalAlbums:
        this.router.navigate(['/musical-albums']);
        break;
      case Menu.MusicalTracks:
        this.router.navigate(['/musical-tracks']);
        break;
      default:
        this.router.navigate(['/main']);
        break;
    }
  }
}
