import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ModalType } from '../../../enums/modal-type.enum';
import { ModalStateService } from '../../../services/modal-state.service';
import { MusicalGroup } from '../../../models/musical-group.model';
import { DataRequestService } from '../../../services/data-request.service';

/**
 * Модально окно создания группы
 */
@Component({
  selector: 'app-group-create',
  templateUrl: './group-create.component.html',
  styleUrls: ['./group-create.component.scss']
})
export class GroupCreateComponent {
  /** Форма для заполнения */
  public createForm: FormGroup;

  public constructor(
    private modalStateService: ModalStateService,
    private dataRequestService: DataRequestService
  ) {
    this.createForm = new FormGroup({
      "groupName": new FormControl("", Validators.required),
      "groupGenre": new FormControl("", Validators.required)
    });
  }

  /**
   * Закрытие модального окна
   */
  public closeWindow(): void {
    this.modalStateService.setStateModal(ModalType.CreateMusicalGroup, false);
  }

  /**
   * Создание и добавление в общий список музыкальной группы
   */
  public createMusicalGroup(): void {
    let lastIndex = this.dataRequestService.allMusicalGroups.at(-1)?.id;
    if (lastIndex == null) {
      return;
    }

    this.dataRequestService.allMusicalGroups.push(new MusicalGroup(lastIndex++, this.createForm.value.groupName, this.createForm.value.groupGenre, []));
    this.closeWindow();
  }
}
