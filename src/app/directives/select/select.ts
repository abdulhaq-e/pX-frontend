// import {
// Component,
// Input,
// Output,
// EventEmitter,
// ElementRef
// } from 'angular2/core';
// import {
// CORE_DIRECTIVES,
// FORM_DIRECTIVES,
// NgClass,
// NgStyle
// } from 'angular2/common';
// import {
// Observable
// } from 'rxjs/Observable';
//
// // import {SelectItem} from './select-item';
// import {HightlightPipe} from './select-pipes';
// import {IOptionsBehavior} from './select-interfaces';
//
// let optionsTemplate = `
//     <ul *ngIf="optionsOpened && options && options.length > 0"
//         class="ui-select-choices ui-select-choices-content ui-select-dropdown dropdown-menu">
//       <li class="ui-select-choices-group">
//         <div *ngFor="#o of options"
//              class="ui-select-choices-row"
//              [class.active]="isActive(o)"
//              (mouseenter)="selectActive(o)"
//              (click)="selectMatch(o, $event)">
//           <a href="javascript:void(0)" class="ui-select-choices-row-inner">
//             <div [innerHtml]="o.text | hightlight:inputValue"></div>
//           </a>
//         </div>
//       </li>
//     </ul>
// `;
//
// @Component({
//   selector: 'ng-select',
//   pipes: [HightlightPipe],
//   template: `
//   <div tabindex="0"
//      *ngIf="multiple === false"
//      (keyup)="mainClick($event)"
//      class="ui-select-container ui-select-bootstrap dropdown open">
//     <div [ngClass]="{'ui-disabled': disabled}"></div>
//     <div class="ui-select-match"
//          *ngIf="!inputMode">
//       <span tabindex="-1"
//           class="btn btn-default btn-secondary form-control ui-select-toggle"
//           (^click)="matchClick()"
//           style="outline: 0;">
//         <span *ngIf="active.length <= 0" class="ui-select-placeholder text-muted">{{placeholder}}</span>
//         <span *ngIf="active.length > 0" class="ui-select-match-text pull-left"
//               [ngClass]="{'ui-select-allow-clear': allowClear && active.length > 0}">{{active[0].text}}</span>
//         <i class="dropdown-toggle pull-right"></i>
//         <i class="caret pull-right"></i>
//         <a *ngIf="allowClear && active.length>0" style="margin-right: 10px; padding: 0;"
//           (click)="remove(activeOption)" class="btn btn-xs btn-link pull-right">
//           <i class="glyphicon glyphicon-remove"></i>
//         </a>
//       </span>
//     </div>
//       ${optionsTemplate}
//   </div>
//   `
// })
// export class Select {
//   @Input()
//   allowClear: boolean = false;
//   @Input()
//   placeholder: string = '';
//   @Input()
//   initData: Array<any> = [];
//   @Input()
//   multiple: boolean = false;
//
//   @Input()
//   label: string;
//
//   @Input() set items(value: Observable<any>) {
//     console.log(value);
//     value.subscribe(periods => {
//       this._items = periods;
//       this.itemObjects = this._items.map(item => {
//       item.text = item[this.label];
//         console.log(item);
//       });
//       this.behavior = new GenericBehavior(this);
//       this.offSideClickHandler = this.getOffSideClickHandler(this);
//       document.addEventListener('click', this.offSideClickHandler);
//       console.log(this._items);
//       {
//         if (this.initData) {
//           this.active = this.initData;
//           this.data.emit(this.active);
//         };
//       };
//     }, error => console.log(error));
//   }
//
//   @Input() set disabled(value: boolean) {
//     this._disabled = value;
//     if (this._disabled === true) {
//       this.hideOptions();
//     }
//   }
//
//   @Output()
//   data: EventEmitter<any> = new EventEmitter();
//   @Output()
//   selected: EventEmitter<any> = new EventEmitter();
//   @Output()
//   removed: EventEmitter<any> = new EventEmitter();
//   @Output()
//   typed: EventEmitter<any> = new EventEmitter();
//
//   public options: Array<any> = [];
//   public itemObjects: Array<any>;
//   public active: Array<any> = [];
//   public activeOption: any;
//   private offSideClickHandler: any;
//   private inputMode: boolean = false;
//   private optionsOpened: boolean = false;
//   private behavior: IOptionsBehavior;
//   private inputValue: string = '';
//   private _items: Array<any> = [];
//   private _disabled: boolean = false;
//
//   constructor(public element: ElementRef) {
//   }
//
//   private focusToInput(value: string = '') {
//     setTimeout(() => {
//       let el = this.element.nativeElement.querySelector('div.ui-select-container > input');
//       el.focus();
//       el.value = value;
//     }, 0);
//   }
//
//   private matchClick(e: any) {
//     if (this._disabled === true) {
//       return;
//     }
//
//     this.inputMode = !this.inputMode;
//     if (this.inputMode === true && ((this.multiple === true && e) || this.multiple === false)) {
//       this.focusToInput();
//       this.open();
//     }
//   }
//
//   private mainClick(e: any) {
//     if (this.inputMode === true || this._disabled === true) {
//       return;
//     }
//
//     if (e.keyCode === 46) {
//       e.preventDefault();
//       this.inputEvent(e);
//       return;
//     }
//
//     if (e.keyCode === 8) {
//       e.preventDefault();
//       this.inputEvent(e, true);
//       return;
//     }
//
//     if (e.keyCode === 9 || e.keyCode === 13 ||
//       e.keyCode === 27 || (e.keyCode >= 37 && e.keyCode <= 40)) {
//       e.preventDefault();
//       return;
//     }
//
//     this.inputMode = true;
//     let value = String
//       .fromCharCode(96 <= e.keyCode && e.keyCode <= 105 ? e.keyCode - 48 : e.keyCode)
//       .toLowerCase();
//     this.focusToInput(value);
//     this.open();
//     e.srcElement.value = value;
//     this.inputEvent(e);
//   }
//
//   private open() {
//     this.options = this.itemObjects
//       .filter(option => (this.multiple === false ||
//       this.multiple === true && !this.active.find(o => option.text === o.text)));
//
//     if (this.options.length > 0) {
//       this.behavior.first();
//     }
//
//     this.optionsOpened = true;
//   }
//
//   ngOnInit() {
//   }
//
//   ngOnDestroy() {
//     document.removeEventListener('click', this.offSideClickHandler);
//     this.offSideClickHandler = null;
//   }
//
//   private getOffSideClickHandler(context: any) {
//     return function(e: any) {
//       if (e.target && e.target.nodeName === 'INPUT'
//         && e.target.className && e.target.className.indexOf('ui-select') >= 0) {
//         return;
//       }
//
//       if (e.srcElement && e.srcElement.className &&
//         e.srcElement.className.indexOf('ui-select') >= 0) {
//         if (e.target.nodeName !== 'INPUT') {
//           context.matchClick(null);
//         }
//         return;
//       }
//
//       context.inputMode = false;
//       context.optionsOpened = false;
//     };
//   }
//
//   public remove(item: any) {
//     if (this._disabled === true) {
//       return;
//     }
//
//     if (this.multiple === true && this.active) {
//       let index = this.active.indexOf(item);
//       this.active.splice(index, 1);
//       this.data.next(this.active);
//       this.doEvent('removed', item);
//     }
//
//     if (this.multiple === false) {
//       this.active = [];
//       this.data.next(this.active);
//       this.doEvent('removed', item);
//     }
//   }
//
//   public doEvent(type: string, value: any) {
//     if ((<any>this)[type] && value) {
//       (<any>this)[type].next(value);
//     }
//   }
//
//   private hideOptions() {
//     this.inputMode = false;
//     this.optionsOpened = false;
//   }
//
//   public inputEvent(e: any, isUpMode: boolean = false) {
//     // tab
//     if (e.keyCode === 9) {
//       return;
//     }
//
//     if (isUpMode && (e.keyCode === 37 || e.keyCode === 39 || e.keyCode === 38 ||
//       e.keyCode === 40 || e.keyCode === 13)) {
//       e.preventDefault();
//       return;
//     }
//
//     // backspace
//     if (!isUpMode && e.keyCode === 8) {
//       let el: any = this.element.nativeElement
//         .querySelector('div.ui-select-container > input');
//
//       if (!el.value || el.value.length <= 0) {
//         if (this.active.length > 0) {
//           this.remove(this.active[this.active.length - 1]);
//         }
//
//         e.preventDefault();
//       }
//     }
//
//     // esc
//     if (!isUpMode && e.keyCode === 27) {
//       this.hideOptions();
//       this.element.nativeElement.children[0].focus();
//       e.preventDefault();
//       return;
//     }
//
//     // del
//     if (!isUpMode && e.keyCode === 46) {
//       if (this.active.length > 0) {
//         this.remove(this.active[this.active.length - 1]);
//       }
//       e.preventDefault();
//     }
//
//     // left
//     if (!isUpMode && e.keyCode === 37 && this._items.length > 0) {
//       this.behavior.first();
//       e.preventDefault();
//       return;
//     }
//
//     // right
//     if (!isUpMode && e.keyCode === 39 && this._items.length > 0) {
//       this.behavior.last();
//       e.preventDefault();
//       return;
//     }
//
//     // up
//     if (!isUpMode && e.keyCode === 38) {
//       this.behavior.prev();
//       e.preventDefault();
//       return;
//     }
//
//     // down
//     if (!isUpMode && e.keyCode === 40) {
//       this.behavior.next();
//       e.preventDefault();
//       return;
//     }
//
//     // enter
//     if (!isUpMode && e.keyCode === 13) {
//       this.selectActiveMatch();
//       e.preventDefault();
//       return;
//     }
//
//     if (e.srcElement) {
//       this.inputValue = e.srcElement.value;
//       this.behavior.filter(new RegExp(this.inputValue, 'ig'));
//       this.doEvent('typed', this.inputValue);
//     }
//   }
//
//   private selectActiveMatch() {
//     this.selectMatch(this.activeOption);
//   }
//
//   private selectMatch(value: any, e: Event = null) {
//     if (e) {
//       e.stopPropagation();
//       e.preventDefault();
//     }
//
//     if (this.options.length <= 0) {
//       return;
//     }
//
//     if (this.multiple === true) {
//       this.active.push(value);
//       this.data.next(this.active);
//     }
//
//     if (this.multiple === false) {
//       this.active[0] = value;
//       this.data.next(this.active[0]);
//     }
//
//     this.doEvent('selected', value);
//     this.hideOptions();
//
//     if (this.multiple === true) {
//       this.focusToInput('');
//     } else {
//       this.element.nativeElement.querySelector('.ui-select-container').focus();
//     }
//   }
//
//   private selectActive(value: any) {
//     this.activeOption = value;
//   }
//
//   private isActive(value: any): boolean {
//     return this.activeOption.text === value.text;
//   }
// }
//
// export class Behavior {
//   public optionsMap: Map<string, number> = new Map<string, number>();
//
//   constructor(public actor: Select) {
//   }
//
//   private getActiveIndex(optionsMap: Map<string, number> = null): number {
//     let ai = this.actor.options.indexOf(this.actor.activeOption);
//
//     if (ai < 0 && optionsMap !== null) {
//       ai = optionsMap.get(this.actor.activeOption.id);
//     }
//
//     return ai;
//   }
//
//   public fillOptionsMap() {
//     this.optionsMap.clear();
//     let startPos = 0;
//     this.actor.itemObjects.map(i => {
//       startPos = i.fillChildrenHash(this.optionsMap, startPos);
//     });
//   }
//
//   public ensureHighlightVisible(optionsMap: Map<string, number> = null) {
//     let container = this.actor.element.nativeElement.querySelector('.ui-select-choices-content');
//
//     if (!container) {
//       return;
//     }
//
//     let choices = container.querySelectorAll('.ui-select-choices-row');
//     if (choices.length < 1) {
//       return;
//     }
//
//     let activeIndex = this.getActiveIndex(optionsMap);
//     if (activeIndex < 0) {
//       return;
//     }
//
//     let highlighted: any = choices[activeIndex];
//     if (!highlighted) {
//       return;
//     }
//
//     let posY: number = highlighted.offsetTop + highlighted.clientHeight - container.scrollTop;
//     let height: number = container.offsetHeight;
//
//     if (posY > height) {
//       container.scrollTop += posY - height;
//     } else if (posY < highlighted.clientHeight) {
//       container.scrollTop -= highlighted.clientHeight - posY;
//     }
//   }
// }
//
// export class GenericBehavior extends Behavior implements IOptionsBehavior {
//   constructor(public actor: Select) {
//     super(actor);
//   }
//
//   public first() {
//     this.actor.activeOption = this.actor.options[0];
//     super.ensureHighlightVisible();
//   }
//
//   public last() {
//     this.actor.activeOption = this.actor.options[this.actor.options.length - 1];
//     super.ensureHighlightVisible();
//   }
//
//   public prev() {
//     let index = this.actor.options.indexOf(this.actor.activeOption);
//     this.actor.activeOption = this.actor
//     .options[index - 1 < 0 ? this.actor.options.length - 1 : index - 1];
//     super.ensureHighlightVisible();
//   }
//
//   public next() {
//     let index = this.actor.options.indexOf(this.actor.activeOption);
//     this.actor.activeOption = this.actor
//     .options[index + 1 > this.actor.options.length - 1 ? 0 : index + 1];
//     super.ensureHighlightVisible();
//   }
//
//   public filter(query: RegExp) {
//     let options = this.actor.itemObjects
//       .filter(option => query.test(option.text) &&
//       (this.actor.multiple === false ||
//         (this.actor.multiple === true &&
//           this.actor.active.indexOf(option) < 0)));
//     this.actor.options = options;
//
//     if (this.actor.options.length > 0) {
//       this.actor.activeOption = this.actor.options[0];
//       super.ensureHighlightVisible();
//     }
//   }
// }
