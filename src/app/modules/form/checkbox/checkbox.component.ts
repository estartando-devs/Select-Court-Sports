import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() value = false
  @Input() label = ""
  @Output() setHour = new EventEmitter<{label: string, value: boolean}>()
  constructor() { }

  handleToggle(){
    // this.value = !this.value
    this.setHour.emit({label: this.label, value: this.value})
  }

  ngOnInit() {
  }

}
