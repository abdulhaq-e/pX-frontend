import {Injectable} from 'angular2/core';
import {API} from '../api/api.service';
import {Filter} from '../api/filter.interface';

@Injectable()
export class PeriodsService {

  constructor(private _api: API) {}

  getPeriods(filters?: Filter[]) {
    return this._api.findAll('Period', 'periods', filters);
  }
}
