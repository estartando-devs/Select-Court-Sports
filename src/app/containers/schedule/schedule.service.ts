import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Filter, Turn } from './schedule.model';
import { deepClone } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  public filter = new BehaviorSubject<Filter>(new Filter())
  public turn = new BehaviorSubject<Turn>(new Turn())
  public date = new BehaviorSubject<Date>(new Date())

  setState = (_state, _data, _key ?: string) => {
    // console.log(_state, _data, _key)
    let state = _state.getValue()
    if(_key)
      state[_key] = {
        ...state[_key],
        ..._data
      }
    else {
      state = {
        ...state,
        ..._data
      }
    }
    _state.next(state)
  }

  getCurrentState = () => this.filter.getValue()
}
