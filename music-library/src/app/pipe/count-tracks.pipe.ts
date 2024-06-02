import { Pipe, PipeTransform } from '@angular/core';

import { MusicalAlbum } from '../models/musical-album.model';
import { MusicalGroup } from '../models/musical-group.model';

/**
 * Пайп для вывода количества треков
 */
@Pipe({
  name: 'countTracks',
  standalone: true
})
export class CountTracksPipe implements PipeTransform {
  /**
   * Получает количество треков у группы
   * @param musicalGroup музыкальная группа
   * @returns количество треков
   */
  public transform(musicalGroup: MusicalGroup): number {
    let countTracks = 0;
    musicalGroup.albums.forEach((element: MusicalAlbum) => {
      countTracks += element.tracks.length;
    });
    return countTracks;
  }
}
