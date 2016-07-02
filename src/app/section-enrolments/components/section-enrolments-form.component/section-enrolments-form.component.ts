import { ChangeDetectionStrategy, Component,
Input, Output, EventEmitter } from '@angular/core';

import {AgGridNg2} from 'ag-grid-ng2/main';

import {GridOptions} from 'ag-grid/main';

import { NumericCellEditor, numberNewValueHandler } from '../../../utils/ag-grid';

@Component({
  selector: 'section-enrolments-form',
  directives: [AgGridNg2],
  template: require('./section-enrolments-form.component.html'),
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: ['.toolbar button {margin: 2px; padding: 0px;}']
})
export class SectionEnrolmentsFormComponent {

  @Input() enrolments: any[];

  @Output() private gradeChanged: EventEmitter<any> = new EventEmitter();

  private gridOptions: GridOptions;

  private columnDefs: any[] = [
    {
      headerName: '#', width: 30,
      checkboxSelection: true, suppressSorting: true,
      suppressMenu: true, pinned: true
    },
    {
      headerName: 'Student Name', field: 'studentName',
      width: 400, pinned: true
    },
    {
      headerName: 'Grades',
      children: [
        {
          headerName: 'Carry Marks', field: 'carryMarks',
          width: 120, editable: true, cellEditor: NumericCellEditor, enableCellChangeFlash: true,
          newValueHandler: numberNewValueHandler, colId: 'carryMarks'
        },
        {
          headerName: 'Final Exam', field: 'finalExam',
          width: 120, editable: true, cellEditor: NumericCellEditor,
          newValueHandler: numberNewValueHandler, enableCellChangeFlash: true,
          colId: 'finalExam'
        },
        {
          headerName: 'Total', width: 120,
          valueGetter: this.totalGradeCalculator
        }
      ]
    },
    {
      headerName: 'Notes',
      field: 'notes'
    }
  ];

  constructor() {
    this.gridOptions = <GridOptions>{};
  };

  private gradeCellChanged($event) {
    console.log($event);
    this.gridOptions.api.refreshView();
    this.gradeChanged.emit($event);
  };

  private totalGradeCalculator(params) {
    // console.log(params.data);
    return params.data.carryMarks + params.data.finalExam;
  };

}
