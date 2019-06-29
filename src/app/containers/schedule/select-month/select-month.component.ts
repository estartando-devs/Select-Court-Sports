import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { MONTHS } from '../../../../helpers/date'

@Component({
  selector: 'app-select-month',
  templateUrl: './select-month.component.html',
  styleUrls: ['./select-month.component.scss']
})
export class SelectMonthComponent implements OnInit {

  @Output() setMonth = new EventEmitter()

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  handle(index){
    this.setMonth.emit(index)
  }

  toggleModal(){
    this.modalService.toggleModal();
  }

  public months = MONTHS
}
