import { ChangeDetectionStrategy, Component,
  Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'section-enrolment-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: require('./section-enrolment-picker.component.html')
})
export class SectionEnrolmentPickerComponent {

  @Input() sections: any;
  @Output() chosenSection: EventEmitter<any> = new EventEmitter();

  constructor() {  }



}
