import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() secondary : boolean
  @Input() clear : boolean
  @Input() icon : string
  @Input() isLoading : boolean
  @Input() handle : any

  constructor() { }

  ngOnInit() {
  }

  onHandle(){
    this.handle()
  }

}
