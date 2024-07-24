import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { DataHandlingService } from '../../services/data-handling.service';

/**
 * Валидация уникальности альбома
 * @param dataHandlingService сервис с данными
 * @returns ошибка или все хорошо
 */
export function validatorUniqueAlbum(dataHandlingService: DataHandlingService): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const checkValue = control.value;
    if (checkValue.albumName == '') {
      return null;
    }

    // Находим группу
    const findGroup = dataHandlingService.allMusicalGroups.find(element => element.id == checkValue.albumGroupId);
    if (findGroup == null) {
      return null;
    }

    // Поиск по имени
    const findAlbumByName = findGroup.albums.find(element => element.name == checkValue.albumName);
    return findAlbumByName == null ? null : { uniqValue: 'Данное наименование уже занято' };
  };
}
