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

  constructor(private scheduleService: ScheduleService, private modalService: ModalService) {
    this.filter = scheduleService.filter
    this.turn = scheduleService.turn
    this.scheduleService.date.subscribe(date=>{
      this.month = monthByNumber(date.getMonth())
      console.log("DATA ATUAL --> ", date)
    })
  }

  setTurn(key){
    const currentValue = this.scheduleService.turn.getValue()[key]
    console.log(currentValue)
    const turn = {}
    turn[key] = !currentValue
    this.scheduleService.setState(this.turn, turn)
  }

  setMonth(index){
    console.log(index)
    let current = this.scheduleService.date.getValue()
    current = moment(current).month(index).toDate()
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
