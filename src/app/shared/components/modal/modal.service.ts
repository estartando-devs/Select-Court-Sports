import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private open = false;
  public openModal = new Subject<boolean>();
  constructor() { }

  toggleModal(){
    this.open = !this.open;
    this.openModal.next(this.open);
  }
}
