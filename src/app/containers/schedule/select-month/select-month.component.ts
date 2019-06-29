import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import * as moment from 'moment';

@Component({
  selector: 'app-select-month',
  templateUrl: './select-month.component.html',
  styleUrls: ['./select-month.component.scss']
})
export class SelectMonthComponent implements OnInit {
  
  public year: any
  public months: any

  constructor(private modalService: ModalService) {
  }

  ngOnInit() {
    this.year = moment().year()
    this.months = moment.months()
  }

  toggleModal(){
    this.modalService.toggleModal();
  } 

  data(value){
    console.log(value)
  }
 
}
