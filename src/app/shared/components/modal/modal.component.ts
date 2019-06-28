import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from './modal.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  public open : boolean;
  @Input() type: string;

  constructor(private modalService: ModalService, private router: Router) {}

  toggleModal(){
    this.modalService.toggleModal()
  }

  ngOnInit() {
    this.modalService.openModal.subscribe(status => {
      this.open = status;
    })
  }

}
