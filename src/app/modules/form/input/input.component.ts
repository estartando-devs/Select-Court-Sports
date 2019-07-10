import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormGroup, FormBuilder, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { BaseControlValueAccessor } from 'src/helpers/baseControlValueAccessor';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent extends BaseControlValueAccessor<string> {

  @Input() type: string = "text";
  @Input() color: string = "";
  @Input() bgColor: string = "";
  @Input() width: string;
  @Input() height: string;
  @Input() id: string = "0";
  @Input() label: boolean = false;
  @Input() iconLabel: string;
  @Input() placeholder = "";
  @Input() bord = "";
  @Input() borderbottom = "";
  @Input() borderradius = "";

  getStyle() {
    return {
      // ...this.style,
      'background-color': this.bgColor,
      'color': this.color,
      'width': this.width,
      'height': this.height,
      'border': this.bord,
      'border-bottom': this.borderbottom,
      'border-radius': this.borderradius,
    };
  }

  handleChange(event){
    this.onChange(event.target.value)
  }
}
