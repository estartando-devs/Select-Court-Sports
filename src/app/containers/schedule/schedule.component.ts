import { Component, OnInit } from '@angular/core';
import { LANG } from 'src/theme/pt';
import { ScheduleService } from './schedule.service';
import { Observable, of } from 'rxjs';
import { Filter, Turn } from './schedule.model';
import { switchMap } from 'rxjs/operators';
import { ModalService } from 'src/app/shared/components/modal/modal.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  public lang = LANG
  public mouth = "Maio"

  public filter: Observable<Filter>
  public turn: Observable<Turn>

  constructor(private scheduleService: ScheduleService, private modalService: ModalService) {
    this.filter = scheduleService.filter
    this.turn = scheduleService.turn
  }

  setTurn(key){
    const currentValue = this.scheduleService.turn.getValue()[key]
    console.log(currentValue)
    const turn = {}
    turn[key] = !currentValue
    this.scheduleService.setState(this.turn, turn)
  }

  back(){
    window.history.back();
  }

  toggleModal(){
    this.modalService.toggleModal();
    // console.log("abriu")
  } 

  ngOnInit() {
  }

}
