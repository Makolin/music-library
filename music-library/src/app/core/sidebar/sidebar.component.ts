import { Component } from '@angular/core';

import { MenuComponent } from './menu/menu.component';

/**
 * Компонент с боковой панелью, который содержит меню
 */
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent { }
