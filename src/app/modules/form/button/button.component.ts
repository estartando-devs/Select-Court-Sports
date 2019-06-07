import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() type : string = "primary"
  @Input() icon : string
  @Input() isLoading : boolean
  @Input() handle : any
  @Input() style: any
  @Input() class: any
  @Input() color: string = ""
  @Input() bgColor: string = ""

  constructor() { }

  getStyle(){
    return {
      ...this.style,
      'color': this.color}
  }

  ngOnInit() {
  }

  onHandle(){
    this.handle && this.handle()
  }

}
