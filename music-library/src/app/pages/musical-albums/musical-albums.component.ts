import { Component } from '@angular/core';

import { MusicalAlbum } from 'src/app/models/musical-album.model';
import { DataRequestService } from 'src/app/services/data-request.service';

/**
 * Компонент для вывода информации об альбомах
 */
@Component({
  selector: 'app-musical-albums',
  templateUrl: './musical-albums.component.html',
  styleUrls: ['./musical-albums.component.scss']
})
export class MusicalAlbumsComponent {
  /** Список всех музыкальных альбомов */
  public allMusicalAlbums: MusicalAlbum[] = [];

  public constructor(
    private dataRequestService: DataRequestService
  ) {
    this.setAllAlbums();
  }

  /**
   * Заполняем список всех альбомов
   */
  private setAllAlbums(): void {
    this.dataRequestService.allMusicalGroups.forEach(group => {
      group.albums.forEach(album => {
        album.groupName = group.name;
        this.allMusicalAlbums.push(album);
      });
    });
  }
}