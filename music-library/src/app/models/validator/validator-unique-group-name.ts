import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { DataHandlingService } from '../../services/data-handling.service';
import { MusicalGroup } from '../musical-group.model';

/**
 * Валидация уникальности наименования группы
 * @param dataHandlingService сервис с данными
 * @param musicalGroup текущая музыкальная группа
 * @returns ошибка или все хорошо
 */
export function validatorUniqueGroupName(dataHandlingService: DataHandlingService, musicalGroup: MusicalGroup | null): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const checkValue = control.value;
    const findGroup = dataHandlingService.allMusicalGroups.find(element => element.name == checkValue.groupName && element.id != musicalGroup?.id);
    if (findGroup == null) {
      return null;
    }

    return { uniqValue: 'Данная группа уже существует' };
  };
}
