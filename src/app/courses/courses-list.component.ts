import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';

import {PeriodsService} from '../periods/periods.service';
import {PeriodsSelectorComponent} from '../periods/periods-selector.component';

@Component({
  template: require('./courses-list.html'),
  directives: [RouterLink, PeriodsSelectorComponent],
  providers: [PeriodsService]
})
export class CoursesListComponent {

  public periods: any;
  public courses: any;
  //public initialPeriod: any;
  public periodsLoaded: boolean = false;

  constructor(private _periodsService: PeriodsService) {
    //setTimeout(() => this.periods = [12,3,4, 6, 7, 9], 2000);
//    this.periods = ['1', '2'];
//    console.log(this.periods);
    this.periods = this._periodsService.getPeriods();
//       .subscribe(periods => {
// //      this.periods = periods.reverse();
//       //console.log(this.periods);
//   //    this.initialPeriod = this.periods[0];
//     //  console.log("before", this.periodsLoaded);
//       //this.periodsLoaded = (this.periods !== undefined);
// //      console.log("after", this.periodsLoaded);
//       //console.log(this.periods === undefined);
//     },
//       error => console.log(error));
  }

  // addPeriod(period: any) {
  //    console.log(period);
  //    this.periods.push(period);
  //    console.log(this.periods);
  // }

}
