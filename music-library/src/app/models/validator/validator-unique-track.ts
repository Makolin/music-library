import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { DataHandlingService } from '../../services/data-handling.service';

/**
 * Валидация уникальности трека
 * @param dataHandlingService сервис с данными
 * @returns ошибка или все хорошо
 */
export function validatorUniqueTrack(dataHandlingService: DataHandlingService): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const checkValue = control.value;
    if (checkValue.trackAlbumId == '') {
      return null;
    }

    // Находим альбом, чтобы проверять внутри него
    const findAlbum = dataHandlingService.allMusicalAlbums.find(element => element.id == checkValue.trackAlbumId);
    if (findAlbum == null) {
      return null;
    }

    // Поиск по имени
    const findTrackByName = findAlbum.tracks.find(element => element.name == checkValue.trackName);
    if (findTrackByName != null) {
      return { uniqValue: 'Данное наименование уже занято' };
    }

    // Поиск по порядковому номеру
    const findTrackBySerialNumber = findAlbum.tracks.find(element => element.serialNumber == checkValue.trackSerialNumber);
    return findTrackBySerialNumber == null ? null : { uniqValue: 'Данное номер уже занят' };
  };
}
