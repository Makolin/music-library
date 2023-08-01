import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MusicalGroup } from '../models/musical-group.model';

/**
 * Сервис для работы с информацией
 * TODO: Добавить запись данных
 */
@Injectable({
  providedIn: 'root'
})
export class DataActionsService {
  /** Список всех музыкальных групп */
  public allMusicalGroups: MusicalGroup[] = [];

  private urlJsonFile: string = 'assets/data.json';

  public constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * Чтение данных из json
   */
  public readDataMusicalGroups(): void {
    this.httpClient.get(this.urlJsonFile).subscribe((data: any) => {
      data.forEach((element : MusicalGroup) => {
        this.allMusicalGroups.push(new MusicalGroup(element.id, element.name, element.genre, element.albums));
      });
    });
  }
}
