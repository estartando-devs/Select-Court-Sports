import { Component, OnInit } from '@angular/core';
import { LANG } from 'src/theme/pt';
import { ScheduleService } from './schedule.service';
import { Observable, of } from 'rxjs';
import { Filter, Turn } from './schedule.model';
import { switchMap } from 'rxjs/operators';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { MONTHS, monthByNumber} from '../../../helpers/date'
import * as moment from 'moment';
import 'moment/locale/pt-br';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  public lang = LANG
  public month = ""

  public filter: Observable<Filter>
  public turn: Observable<Turn>
  public date: Observable<Date>

  constructor(private scheduleService: ScheduleService, private modalService: ModalService) {
    this.filter = scheduleService.filter
    this.turn = scheduleService.turn
    this.date = this.scheduleService.date
    this.scheduleService.date.subscribe(date=>{
      this.month = monthByNumber(date.getMonth())
      console.log("DATA ATUAL --> ", date)
    })
  }

  setTurn(key){
    const currentValue = this.scheduleService.turn.getValue()[key]
    const turn = {}
    turn[key] = !currentValue
    this.scheduleService.setState(this.turn, turn)
  }

  setMonth(index){
    let current = this.scheduleService.date.getValue()
    current = moment(current).month(index).toDate()
    this.scheduleService.date.next(current)
  }

  setWeekDay(_weekDay){
    let current = this.scheduleService.date.getValue()
    current = moment(current).date(_weekDay).toDate()
    this.scheduleService.date.next(current)
  }

  setWeek(_week){
    console.log(_week)
    let current = this.scheduleService.date.getValue()
    current = moment(current).week(_week).toDate()
    this.scheduleService.date.next(current)
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
