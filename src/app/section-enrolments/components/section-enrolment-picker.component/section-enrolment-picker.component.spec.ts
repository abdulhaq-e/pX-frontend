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

import { SectionEnrolmentPickerComponent } from '../../components';

describe('Section Enrolment Picker', () => {

  let builder;
  beforeEachProviders(() => [TestComponentBuilder]);

  beforeEach(inject([TestComponentBuilder], (tcb) => {
    builder = tcb;
  }));

  it('should accept an input and display it', async(() => {
    builder.overrideTemplate(
      SectionEnrolmentPickerComponent,
      `<span>{{sections}}</span>`)
      .createAsync(SectionEnrolmentPickerComponent).then(
      (fixture: ComponentFixture<SectionEnrolmentPickerComponent>) => {
        fixture.debugElement.componentInstance.sections = 'Hello';
        fixture.detectChanges();
        expect(fixture.debugElement.nativeElement).toHaveText('Hello');
      });
  }));

  it('should emit a chosen section', fakeAsync(() => {
    let fixture = builder.overrideTemplate(
      SectionEnrolmentPickerComponent, `<span>Hi</span>`)
    .createFakeAsync(
      SectionEnrolmentPickerComponent);
    fixture.detectChanges();
    let emitter = fixture.debugElement.componentInstance.chosenSection;
    // console.log(emitter);
    let subscription = emitter.subscribe(event => {
      expect(event).not.toBe('Hello2');
      expect(event).toBe('Hello');
    });

    emitter.emit('Hello');
    tick();

  }));
});
