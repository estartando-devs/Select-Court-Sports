import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private open = false;
  public openModal = new Subject<boolean>();
  constructor(private router: Router) { }

  toggleModal(){
    this.open = !this.open;
    this.openModal.next(this.open);
  }

  goTo(route){
    this.toggleModal();
    this.router.navigate([route]);
  }
}
