import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

import { Menu, MenuLabel } from './../../../enums/menu.enum';
import { MenuService } from './../../../services/menu.service';

/**
 * Компонент для работы с меню
 */
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgFor],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  /** Алиас меню */
  public enumMenu = Menu;

  /** Алиас меню и названия строки */
  public enumMenuLabel = MenuLabel;

  /** Общий список меню для вывода */
  public allMenuItems = [
    Menu.Main,
    Menu.MusicalGroups,
    Menu.MusicalAlbums,
    Menu.MusicalTracks,
    Menu.MusicalGenres,
    Menu.MusicalConcerts
  ];

  public constructor(
    public menuService: MenuService
  ) { }
}
