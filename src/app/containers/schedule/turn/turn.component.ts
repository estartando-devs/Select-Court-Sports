import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Turn } from '../schedule.model';

@Component({
  selector: 'app-turn',
  templateUrl: './turn.component.html',
  styleUrls: ['./turn.component.scss']
})
export class TurnComponent{

  @Input() turn: Observable<Turn>
  @Output() setTurn = new EventEmitter<string>()

  constructor() {}

  handle(_turn){
    this.setTurn.emit(_turn)
  }

}
