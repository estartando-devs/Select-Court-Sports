import { Component, OnInit, Input } from '@angular/core';
import { DbService } from 'services/db.service';
import { Court } from 'models/court'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courts',
  templateUrl: './courts.component.html',
  styleUrls: ['./courts.component.sass']
})
export class CourtsComponent implements OnInit {

  public courts: any;

  public item: Court;
  public key: string = '';

  constructor(public dbService: DbService){
    this.courts = this.dbService.getAll();
  }

  ngOnInit() {
    this.item = new Court();
  }

  add() {
    this.dbService.add(this.item);
    this.item = new Court();
  }

  delete(key){
    this.dbService.delete(key);
  }


}
