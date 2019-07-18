import { Component, OnInit } from '@angular/core';
import { LANG } from 'src/theme/pt';
import { ScheduleService } from './schedule.service';
import { Observable, of } from 'rxjs';
import { Filter } from './schedule.model';
import { switchMap } from 'rxjs/operators';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { MONTHS, monthByNumber} from '../../../helpers/date'
import * as moment from 'moment';
import 'moment/locale/pt-br';
import { Turn } from 'src/app/modules/calendar/turn/turn.model';


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
      // Atualiza o mês selecionado por numero (0 - 11)
      this.month = monthByNumber(date.getMonth())
      // console.log("DATA ATUAL --> ", date)
    })
  }

  setTurn(key){
    // Captura o valor do turno selecionado no filtro clicado (key)
    const currentValue = this.scheduleService.turn.getValue()[key]
    const turn = {}
    // Grava o valor oposto do atual na variavel turn
    turn[key] = !currentValue
    // Grava o novo valor
    this.scheduleService.setState(this.turn, turn)
  }

  setMonth(index){
    // Captura a data atual
    let current = this.scheduleService.date.getValue()
    // Grava o novo mes utilizando o indice selecionado
    current = moment(current).month(index).toDate()
    // Emite o novo valor
    this.scheduleService.date.next(current)
  }

  setWeekDay(_weekDay){
    // Captura a data atual
    let current = this.scheduleService.date.getValue()
    // Verifica de o módulo da diferença da data atual pela data selecionada é maior que 7
    // Caso seja verdadeiro, foi selenionado um mês diferente do atual
    if(Math.abs(current.getDate() - _weekDay) > 7){
      // Se a data atual for menor que o dia selecionado subtrai um mês
      if(current.getDate() < _weekDay)
        current = moment(current).subtract("month", 1).toDate()
      // Se a data atual for menor que o dia selecionado adiciona um mês
      else
        current = moment(current).add("month", 1).toDate()
    }
    // Grava o dia clicado na data atual
    current = moment(current).date(_weekDay).toDate()
    // Emite o novo valor
    this.scheduleService.date.next(current)
  }

  setWeek(_week){
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
