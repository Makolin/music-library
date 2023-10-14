import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { GroupEditComponent } from './group-edit/group-edit.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    GroupEditComponent
  ],
  declarations: [
    GroupEditComponent
  ]
})
export class ModalsModule { }
