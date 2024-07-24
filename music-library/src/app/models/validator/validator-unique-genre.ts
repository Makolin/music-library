import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { DataHandlingService } from '../../services/data-handling.service';

/**
 * Валидация уникальности жанра
 * @param dataHandlingService сервис с данными
 * @returns ошибка или все хорошо
 */
export function validatorUniqueGenre(dataHandlingService: DataHandlingService): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const checkValue = String(control.value).trim();
    if (checkValue.length == 0) {
      return null;
    }

    const findGenre = dataHandlingService.allMusicalGenres.find(element => element.name == checkValue);
    return findGenre == null ? null : { uniqValue: 'Данное наименование уже занято' };
  };
}
