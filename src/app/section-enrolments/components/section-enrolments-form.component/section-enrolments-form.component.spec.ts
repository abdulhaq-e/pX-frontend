import {
  async,
  it,
  inject,
  injectAsync,
  ddescribe,
  xdescribe,
  describe,
  beforeEachProviders,
  beforeEach,
  expect,
  fakeAsync,
  iit,
  tick,
  xit
} from '@angular/core/testing';

import {
  ComponentFixture,
  TestComponentBuilder
} from '@angular/compiler/testing';

import { SectionEnrolmentsFormComponent } from '../../components';

describe('Section Enrolments Form Component', () => {
  let builder;

  beforeEachProviders(() =>
    [TestComponentBuilder]);

  beforeEach(inject([TestComponentBuilder], (tcb) => {
    builder = tcb;
  }));
  //
  // beforeEach(() => {
  //   jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  // });

  it('should override template', async(() => {
    builder.overrideTemplate(
      SectionEnrolmentsFormComponent,
      `<span>Hello</span>`)
      .createAsync(SectionEnrolmentsFormComponent).then(
      (fixture: ComponentFixture<SectionEnrolmentsFormComponent>) => {
        let compiled = fixture.debugElement.nativeElement;
        expect(compiled).toHaveText('Hello');
      });
  }));

  it('should accept an input and display it', async(() => {
    builder.overrideTemplate(
      SectionEnrolmentsFormComponent,
      '<div>{{myName}}</div>')
      .createAsync(SectionEnrolmentsFormComponent).then(
      (fixture: ComponentFixture<SectionEnrolmentsFormComponent>) => {
        fixture.debugElement.componentInstance.myName = 'Abdulhaq';
        let compiled = fixture.debugElement.nativeElement;
        expect(compiled).not.toHaveText('Abdulhaq');
        expect(compiled).toHaveText('');
        fixture.detectChanges();
        expect(compiled).toHaveText('Abdulhaq');
      });
  }));

  // xit('should modify the column definition and ag-grid should pick it up',
  //   async(() => {
  //     let fixture = builder.createAsync(SectionEnrolmentsFormComponent).then(
  //       (fixture: ComponentFixture<SectionEnrolmentsFormComponent>) => {
  //         let columnDefs = [
  //           {
  //             headerName: 'name',
  //             field: 'name'
  //           },
  //           {
  //             headerName: 'grade',
  //             field: 'grade'
  //           }
  //         ];
  //         // fixture.debugElement.componentInstance.columnDefs = columnDefs;
  //         // fixture.debugElement.componentInstance.enrolments = [];
  //         // tick(3000);
  //         // console.log(fixture);
  //         // fixture.autoDetectChanges();
  //         // fixture.componentInstance.gridOptions.columnDefs = columnDefs;
  //         // fixture.ngZone.runOutsideAngular(()=> {
  //         // fixture.detectChanges();
  //         // console.log(fixture);
  //         //     expect(fixture.componentInstance.gridOptions.columnDefs)
  //         //     .toEqual(columnDefs);
  //         // expect(1).toEqual(1);
  //         // });
  //
  //         // tick();
  //         // fixture.whenStable().then(() => {
  //         //   // fixture.detectChanges();
  //         // });
  //
  //         // setTimeout(() => {
  //         // console.log(fixture);
  //         // expect(1).toEqual(1);
  //
  //         // // let grid = fixture.componentInstance.gridOptions;
  //         // // grid.api.refreshHeader();
  //         //   // fixture.detectChanges();
  //         //   console.log(fixture);
  //         //   expect(fixture.debugElement.componentInstance.gridOptions.columnDefs)
  //         //   .toEqual(columnDefs);
  //         // }, 2000)
  //       });
  //   }));

  // xit('should accept the enrolments as input and the grid should have them',
  //   async(() => {
  //     builder.createAsync(SectionEnrolmentsFormComponent).then(
  //       (fixture: ComponentFixture<SectionEnrolmentsFormComponent>) => {
  //         let columnDefs = [
  //           {
  //             field: 'name'
  //           },
  //           {
  //             field: 'grade'
  //           }
  //         ];
  //         let enrolments = [
  //           {
  //             'name': 'Leonard Euler',
  //             'grade': 100
  //           }
  //         ];
  //         //     // fixture.autoDetectChanges();
  //         //     // fixture.componentInstance.columnDefs = columnDefs;
  //         //     // fixture.componentInstance.enrolments = enrolments;
  //         //     // fixture.componentInstance.hi = '1';
  //         //     fixture.detectChanges();
  //         //     // expect(fixture.debugElement.componentInstance.gridOptions.rowData)
  //         //     // .toEqual(enrolments);
  //         //
  //         //     // expect(fixture.componentInstance.hi).toEqual('1');
  //         //     console.log(fixture);
  //         //     // console.log(fixture);
  //         //     // expect(true).toEqual(true);
  //         //     console.log(fixture.isStable());
  //         //     // debugger;
  //         //     return new Promise((resolve: any) => {
  //         //       setTimeout(() => {
  //         //         fixture.detectChanges();
  //         //         // rootRenderer.executeCommands();
  //         //         expect('1').toEqual('1');
  //         //         resolve();
  //         //       }, 2000);
  //         //     });
  //         //     //   return new Promise((resolve: any) => {
  //         //     //   setTimeout(() => {
  //         //     //     // fixture.detectChanges();
  //         //     //     // while (!fixture.debugElement.componentInstance.gridOptions.api.gridReady) {
  //         //     //       expect(1).toEqual(1);
  //         //     //     // }
  //         //     //     // debugger;
  //         //     //     // console.log(fixture.debugElement.componentInstance.gridOptions.rowData);
  //         //     //     // expect(fixture.debugElement.componentInstance.gridOptions.rowData)
  //         //     //     // .toEqual(enrolments);
  //         //     // }, 200);
  //         //   });
  //         // // fixture.whenStable().then((waited)=> {
  //         // //   expect(waited).toBe(true);
  //         // //   console.log('hi');
  //         // //   fixture.detectChanges();
  //         // //   console.log(fixture.debugElement.componentInstance.gridOptions.rowData);
  //         // //   expect(fixture.debugElement.componentInstance.gridOptions.rowData)
  //         // //   .toEqual(enrolments);
  //         // // });
  //         // // });
  //       }));

  // it('should emit the gradeChaged event', fakeAsync(() => {
  //   let emittedEvent;
  //   let fixture: ComponentFixture<SectionEnrolmentsFormComponent> = builder.overrideTemplate(
  //     SectionEnrolmentsFormComponent,
  //     '<div>My name is Euler</div>')
  //     .createFakeAsync(SectionEnrolmentsFormComponent);
  //
  //   fixture.detectChanges();
  //   let instance = fixture.debugElement.componentInstance;
  //   /* Temporary redefinition */
  //   instance.gradeCellChanged = (event) => {
  //     instance.gradeChanged.emit(event);
  //     // console.log(event);
  //   };
  //   instance.gradeChanged.subscribe(event => {
  //     emittedEvent = event;
  //     // console.log(event);
  //   });
  //   expect(emittedEvent).toBe(undefined);
  //   instance.gradeCellChanged(10);
  //   expect(emittedEvent).toBe(undefined);
  //   tick();
  //   expect(emittedEvent).toEqual(10);
  // }));
});
