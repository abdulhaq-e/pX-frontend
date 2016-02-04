import {Component, EventEmitter, Input} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from 'angular2/common';

import {PeriodsService} from '../periods/periods.service';
import {Select} from '../directives/select/select';

//console.log(SELECT_DIRECTIVES);
@Component({
  selector: 'periods-selector',
//  inputs: ['periodsList', 'initialPeriod'],
  directives: [Select,
    CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass],
//  output: ['onPeriodSelected'],
  template: `
  <ng-select [allowClear]="true"
            [items]="periods"
            [disabled]="false"
            [label]="name"
            (data)="refreshValue($event)"
            (selected)="selected($event)"
            (removed)="removed($event)"
            (typed)="typed($event)"
            placeholder="No period selected">
  </ng-select>
  `
})
export class PeriodsSelectorComponent {

  public periods: any;
//  @Input() initialPeriod: any;
//  public onPeriodSelected: EventEmitter<any>;

  public selectedPeriod: any;
  public name: string = 'name';

  constructor(private _periodsService: PeriodsService) {
    this.periods = this._periodsService.getPeriods();
    //this.onPeriodSelected = new EventEmitter();
  }

  private selected(value: any) {
    console.log('Selected value is: ', value);
  }

  private removed(value: any) {
    console.log('Removed value is: ', value);
  }

  private typed(value: any) {
    console.log('New search input: ', value);
  }

  private refreshValue(value: any) {
    this.selectedPeriod = value;
  }
}
