import { Component } from '@angular/core';

import { Menu, MenuLabel } from './../../../enums/menu.enum';
import { MenuService } from './../../../services/menu.service';

/**
 * Компонент для работы с меню
 */
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  /** Алиас меню */
  public Menu = Menu;

  /** Алиас меню и названия строки */
  public MenuLabel = MenuLabel;

  /** Общий список меню для вывода */
  public allMenuItems = [Menu.Main, Menu.MusicalGroups, Menu.MusicalAlbums, Menu.MusicalTracks];

  public constructor(public menuService: MenuService) { }
}
