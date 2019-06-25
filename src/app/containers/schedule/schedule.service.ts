import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Filter } from './schedule.model';
import { deepClone } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  public filter = new BehaviorSubject<Filter>(new Filter())

  constructor() {
   }

  setState = (key, data) => {
    const state = {
      ...this.filter.getValue()
    }
    state[key] = {
      ...state[key],
      ...data
    }
    this.filter.next(state)
  }

  getCurrentState = () => this.filter.getValue()
}
