import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HoursConfig } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class ManagerScheduleService {

  public hoursConfig = new BehaviorSubject(new Array<HoursConfig>())

  constructor() { }

  setState = (_data, _key ?: string) => {
    // console.log(_state, _data, _key)
    let state = this.getCurrentState()
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
    this.hoursConfig.next(state)
  }

  getCurrentState = () => this.hoursConfig.getValue()
}
