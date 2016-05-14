import { ChangeDetectionStrategy, Component,
Input, Output, EventEmitter } from '@angular/core';

import {AgGridNg2} from 'ag-grid-ng2/main';

import {GridOptions} from 'ag-grid/main';
import ProficiencyFilter from './proficiencyFilter';
import SkillFilter from './skillFilter';
import RefData from './refData';

import { NumericCellEditor, numberNewValueHandler } from '../../utils/ag-grid';

@Component({
  selector: 'assessments-form',
  directives: [AgGridNg2],
  template: require('./assessments-form.html'),
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: ['.toolbar button {margin: 2px; padding: 0px;}']
})
export class AssessmentsFormComponent {

  private gridOptions: GridOptions;

  @Input()
  public rowData: any[];

  @Output('onGradeChange')
  private _onGradeChange: EventEmitter<any> = new EventEmitter();

  private columnDefs: any[] = [
    {
      headerName: '#', width: 30,
      checkboxSelection: true, suppressSorting: true,
      suppressMenu: true, pinned: true
    },
    {
      headerName: 'Student Name', field: "name",
      width: 400, pinned: true
    },
    {
      headerName: 'Grades',
      children: [
        {
          headerName: "Carry Marks", field: "assessments.carry_marks.grade",
          width: 120, editable: true, cellEditor: NumericCellEditor, enableCellChangeFlash: true,
          newValueHandler: numberNewValueHandler
        },
        {
          headerName: "Final Exam", field: "assessments.final_exam.grade",
          width: 120, editable: true, cellEditor: NumericCellEditor,
          newValueHandler: numberNewValueHandler, enableCellChangeFlash: true
        },
        {
          headerName: "Total", field: "assessments.total.grade",
          width: 120, editable: true, cellEditor: NumericCellEditor,
          newValueHandler: numberNewValueHandler, enableCellChangeFlash: true
        },
      ]
    },
    {
      headerNameؤ: 'Notes',
      field: "notes"
    }
  ];

  constructor() {
    // we pass an empty gridOptions in, so we can grab the api out
    this.gridOptions = <GridOptions>{};
  };

  private gradeCellChanged($event) {
    this._onGradeChange.emit($event);
  };

}
