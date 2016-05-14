import {Control} from '@angular/common';

export function registrationNumberValidator(control: Control): {[s: string]: boolean} {
  if (!control.value.match(/^0/)) {
    return {invalidRegNumber: true}
  }
}
