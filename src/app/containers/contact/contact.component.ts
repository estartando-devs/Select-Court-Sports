import { Component, OnInit } from '@angular/core';
import { LANG } from 'src/theme/pt';
import { ModalService } from 'src/app/shared/components/modal/modal.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public lang = LANG;
  constructor( private modalService: ModalService) { }

  toggleModal(){
    this.modalService.toggleModal();
  }

  goTo(route){
    this.modalService.goTo(route);
  }

  back(){
    window.history.back();
  }

  ngOnInit() {
  }

}
