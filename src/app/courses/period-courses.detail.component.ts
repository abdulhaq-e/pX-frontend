import {Component, OnInit} from '@angular/core';
import {RouterLink, RouteParams} from '@angular/router';


@Component({
    template: require('./period-courses-detail.html'),
    directives: [RouterLink]
})
export class PeriodCoursesDetailComponent implements OnInit {

    public id: string;

    constructor(
        private _routerParams: RouteParams
    ) {}

    ngOnInit() {
        let id = this._routerParams.get('id');
        this.id = id;
    }

}
