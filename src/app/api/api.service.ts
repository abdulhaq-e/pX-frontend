import {Injectable} from 'angular2/core';
import {Http, URLSearchParams} from 'angular2/http';
import {Filter} from './filter.interface';
import JsonApi = require('jsonapi-datastore');
import * as Rx from 'rxjs';

//console.log(JsonApi.JsonApiDataStore);

//console.log(store);

@Injectable()
export class API {

  public base: string = 'http://localhost:8001/api/v1/';
  public store = new JsonApi.JsonApiDataStore();

  constructor(private http: Http) {
    //  console.log(this.store);
    // console.log(api.query({ 'findRelated': { type:
    //'PeriodCourse', id: '124', relationship: 'assessments' }}));
  }

  findAll(ResourceType: string, ResourceTypeUrl: string,
    filters?: Filter[]) {
    var searchParams = new URLSearchParams();
    // console.log('hello there');
    if (filters) {
      // console.log('hello again');
      filters.forEach(filter => {
        searchParams.set(
          'filter[' + filter.field + ']',
          filter.value);
      }
        );
    };
    //      console.log('iam here');
    return Rx.Observable.create(observer => {
      this.http.get(this.base + ResourceTypeUrl,
        { search: searchParams })
        .map(response => response.json())
        .subscribe(data => {
        this.store.syncWithMeta(data);
        console.log(this.store);
        observer.next(this.store.findAll(ResourceType));
        observer.complete();
      });
    }
  );
  }


  findOne(type: string, id: string) {
    return this.http.get(this.base + type + '/' + id)
      .map(response => this.store(response.json()));
  }

  getCourses() {
    var params = new URLSearchParams();
    params.set('filter[course.code]', 'AE325');
    console.log(params);
    return this.http
      .get('http://localhost:8001/api/v1/period-courses',
      { search: params })
      .map(response => response.json());
  }
  //
}
    //
