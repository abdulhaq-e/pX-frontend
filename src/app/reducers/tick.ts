import {Reducer, Action} from '@ngrx/store';

export const DAY = 'DAY';
export const HOUR = 'HOUR';
export const SECOND = 'SECOND';

export const tick: Reducer<Date> = (state: Date = new Date(),
  {type, payload}) => {

  const d: Date = new Date(state);

  switch (type) {
    case DAY:
      d.setDate(d.getDate() + payload);
      return d;

    case HOUR:
      d.setHours(d.getHours() + payload);
      return d;

    case SECOND:
      d.setSeconds(d.getSeconds() + payload);
      return d;

    default:
      return state;
  }

};
