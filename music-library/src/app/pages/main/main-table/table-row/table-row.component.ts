import { Component, Input } from '@angular/core';

import { Parameter } from '../../../../models/parameter.model';


/**
 * Компонент для вывода строки параметра
 */
@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent  {
  /** Входящий параметр для вывода */
  @Input()
  public parameter!: Parameter;
}
