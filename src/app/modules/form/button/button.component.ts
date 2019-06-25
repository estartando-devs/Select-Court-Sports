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
  @Input() margin: string
  @Input() width: string
  @Input() height: string

  constructor() { }

  getStyle(){
    return {
      ...this.style,
      'color': this.color,
      'margin': this.margin,
      'width': this.width,
      'height': this.height
    }
  }

  ngOnInit() {
  }

  onHandle(){
    this.handle && this.handle()
  }

}
