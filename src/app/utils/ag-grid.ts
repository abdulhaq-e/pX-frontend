export function isKeyPressedNumeric(event) {
  event = event || window.event;
  let charCode = (typeof event.which === 'undefined') ? event.keyCode : event.which;
  let charStr = String.fromCharCode(charCode);
  if (charStr === '.' || /\d/.test(charStr)) {
    return true;
  }
  return false;
}

export const numberNewValueHandler = (params) => {
  // console.log(params);
  let valueAsNumber = parseFloat(params.newValue);
  if (isNaN(valueAsNumber)) {
    window.alert('Invalid value ' + params.newValue + ', must be a number');
  } else {
    params.api.valueService.setValueUsingField(
      params.data, params.colDef.field, valueAsNumber);
  }
};


export class NumericCellEditor {
  public eInput: any;

  constructor() {
  }
  // gets called once before the renderer is used
  init(params) {
    // create the cell
    // console.log(params);
    this.eInput = document.createElement('input');
    // TODO: FIX ME
    this.eInput.value = params.value;

    let that = this;
    this.eInput.addEventListener('keypress', function(event) {
      if (!isKeyPressedNumeric(event)) {
        that.eInput.focus();
        that.eInput.select();
        if (event.preventDefault) event.preventDefault();
      }
    });

  };

  // gets called once when grid ready to insert the element
  getGui() {
    return this.eInput;
  };

  // focus and select can be done after the gui is attached
  afterGuiAttached() {
    this.eInput.focus();
    this.eInput.select();
  };

  // returns the new value after editing
  getValue() {
    return this.eInput.value;
  };

  // any cleanup we need to be done here
  destroy() {
    // but this example is simple, no cleanup, we could  even leave this method out as it's optional
  };

  // if true, then this editor will appear in a popup
  isPopup() {
    // and we could leave this method out also, false is the default
    return false;
  };
};


// // function to act as a class
// export class AssessmentsCellRenderer {
//
//   public eGui: any;
//   public eValue: any;
//
//   constructor() {
//   };
//
//   // gets called once before the renderer is used
//   init(params) {
//     this.eGui = document.createElement('div');
//     this.eGui.innerHTML = `<span></span>`;
//
//     // get references to the elements we want
//     this.eValue = this.eGui.querySelectorAll('span')[0];
//
//     // set value into cell
//     this.eValue.innerHTML = params.valueFormatted ? params.valueFormatted : params.value;
//   };
//
//   getGui() {
//     return this.eGui;
//   };
//
//   // gets called whenever the user gets the cell to refresh
//   refresh(params) {
//     // set value into cell again
//     this.eValue.innerHTML = params.valueFormatted ? params.valueFormatted : params.value;
//   };
//
//   destroy() {
//   };
// };
