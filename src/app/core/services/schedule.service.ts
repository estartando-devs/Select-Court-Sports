import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DbService } from './db.service';
import { Schedule } from 'src/app/shared/models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(
    private db: DbService
  ) { }

  getSchedules(): Observable<Schedule[]>{
    return this.db.getAll("schedule")
  }

}
