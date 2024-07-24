import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

import { MainTableComponent } from './main-table/main-table.component';

/**
 * Компонент для вывода основной страницы
 */
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MainTableComponent, NgIf],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent { }
