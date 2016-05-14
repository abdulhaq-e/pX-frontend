import {
  async,
  it,
  inject,
  injectAsync,
  describe,
  beforeEachProviders,
  beforeEach
} from '@angular/core/testing';

import {
  ComponentFixture,
  TestComponentBuilder
 } from '@angular/compiler/testing';

import { AssessmentsFormComponent } from '../components';

describe('Assessments Form Component', () => {
  var builder;

  beforeEachProviders(() =>
  [AssessmentsFormComponent, TestComponentBuilder]);

  beforeEach(inject([TestComponentBuilder], tcb => {
    builder = tcb;
  }));

  it('should accept an input', async(() => {
    // jasmine.log(builder);
    builder.createAsync(AssessmentsFormComponent).then(
      (fixture: ComponentFixture<AssessmentsFormComponent>) => {
        fixture.autoDetectChanges();
        var compiled = fixture.debugElement.nativeElement;
        fixture.componentInstance.rowData = ['hello'];
        // change should be automatically detected
        // apparently not
        fixture.detectChanges();
        expect(fixture.componentInstance.gridOptions.rowData)
        .toEqual(['hello']);
        console.log(fixture);
      })
  }));

})
