import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HoursConfig, RulesDay } from 'src/app/shared/models';
import { AngularFireDatabase } from '@angular/fire/database';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerScheduleService extends DbService {
  private collection = "manager-schedule"

  constructor(private dbFire: AngularFireDatabase) {
    super(dbFire)
  }

  getRulesDay(): Observable<RulesDay[][]>{
    return this.getAll(this.collection)
  }

  updateRule(obj, key){
    this.update(obj, key, this.collection)
  }

  // async addSchedule(_schedule: Schedule){
  //   const response = await this.add(_schedule, this.collection)
  //   console.log(response)
  // }

}
