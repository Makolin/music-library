import { NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { ModalType } from './enums/modal-type.enum';
import { AlbumEditComponent } from './pages/modals/album-edit/album-edit.component';
import { GenreEditComponent } from './pages/modals/genre-edit/genre-edit.component';
import { GroupEditComponent } from './pages/modals/group-edit/group-edit.component';
import { ModalStateService } from './services/modal-state.service';

/**
 * Основной компонент приложения
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    GroupEditComponent,
    AlbumEditComponent,
    GenreEditComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    RouterOutlet,
    NgIf,
    HttpClientModule,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * TODO: При перезагрузке страницы, уточнять насчет выхода
   */
  @HostListener('window:beforeunload')
  public checkSaveData(): void {
    console.log();
  }

  /** Алиас типов модальных окон */
  public enumModalType = ModalType;

  public constructor(
    public modalStateService: ModalStateService
  ) { }
}
