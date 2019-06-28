import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/components/modal/modal.service';

@Component({
  selector: 'app-select-month',
  templateUrl: './select-month.component.html',
  styleUrls: ['./select-month.component.scss']
})
export class SelectMonthComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  toggleModal(){
    this.modalService.toggleModal();
  } 

  public months = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f"
  ]
}
