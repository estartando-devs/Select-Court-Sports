import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

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
  @Input() controlName = "";
  @Output() change = new EventEmitter()

  constructor() {}

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

  onChange(event){
    this.change.emit(event)
  }

  ngOnInit() {}
}
