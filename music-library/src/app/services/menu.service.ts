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
  private readonly DEFAULT_MENU_ITEM = Menu.Main;

  /** Текущий выбранный пункт меню */
  public currentMenuItem = this.DEFAULT_MENU_ITEM;

  public constructor(
    private _router: Router
  ) {
    this.setRouteApp();
  }

  /**
   * Переключатель для пунктов меню
   * @param newItemMenu новый пункт меню
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
        this._router.navigate([`/${Menu.Main}`]);
        break;

      case Menu.MusicalGroups:
        this._router.navigate([`/${Menu.MusicalGroups}`]);
        break;

      case Menu.MusicalAlbums:
        this._router.navigate([`/${Menu.MusicalAlbums}`]);
        break;

      case Menu.MusicalTracks:
        this._router.navigate([`/${Menu.MusicalTracks}`]);
        break;

      case Menu.MusicalGenres:
        this._router.navigate([`/${Menu.MusicalGenres}`]);
        break;

      case Menu.MusicalConcerts:
        this._router.navigate([`/${Menu.MusicalConcerts}`]);
        break;

      default:
        this._router.navigate([`/${Menu.Main}`]);
        break;
    }
  }
}
