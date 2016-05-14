import { SimpleChange } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';

export function makeObservableFunction<T>(target: any, functionName: string) {
    let observer: Observer<any>;
    const observable = Observable.create(obs => {
      console.log(obs);
        observer = obs;
    });
    target[functionName] = function() {
      // console.log(observer);
        const len = arguments.length;
        console.log(arguments);
        if (len === 1) {
            observer.next(arguments[0]);
        } else {
            const args = new Array(len);
            for (let i = 0; i < len; i++) {
                args[i] = arguments[i];
            }
            observer.next(args);
        }
    }
    return observable;
}

export function observeCurrentValueFor<T>(changes$: Observable<{ [key: string]: SimpleChange }>, propertyName: string) {
    return changes$
        .filter(changes => !!changes[propertyName])
        .map<T>(changes => changes[propertyName].currentValue);
}
