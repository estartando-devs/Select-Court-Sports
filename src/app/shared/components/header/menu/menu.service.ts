import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private open = false
  public openSub = new Subject<boolean>()
  constructor() { }

  toggleMenu(){
    this.open = !this.open
    this.openSub.next(this.open)
  }
}
