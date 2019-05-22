import { Component, OnInit, Input } from '@angular/core';

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
  @Input() id: string;
  @Input() label: boolean = false;
  @Input() iconLabel: string;
  @Input() placeholder: string;

  constructor() {}

  getStyle() {
    return {
      // ...this.style,
      'background-color': this.bgColor,
      'color': this.color,
      'width': this.width,
      'height': this.height
    };
  }

  ngOnInit() {}
}
