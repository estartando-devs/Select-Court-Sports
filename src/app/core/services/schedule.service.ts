import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DbService } from './db.service';
import { Schedule } from 'src/app/shared/models';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService extends DbService {
  private collection = "schedule"

  constructor(private dbFire: AngularFireDatabase) {
    super(dbFire)
   }

  getSchedules(): Observable<Schedule[]>{
    return this.getAll(this.collection)
  }

  async addSchedule(_schedule: Schedule){
    const response = await this.add(_schedule, this.collection)
    console.log(response)
  }

}
