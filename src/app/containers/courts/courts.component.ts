import { Component, OnInit, Input } from '@angular/core';
import { DbService } from 'services/db.service';
import { Court } from 'models/court'
import { Observable } from 'rxjs';
import { AuthService } from 'services/auth.service';
import { LANG } from '../../../theme/pt';

@Component({
  selector: 'app-courts',
  templateUrl: './courts.component.html',
  styleUrls: ['./courts.component.sass']
})
export class CourtsComponent implements OnInit {

  public courts: any;
  public lang = LANG;

  public item: Court;
  public key: string = '';

  constructor(private auth: AuthService, public dbService: DbService){
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

  logout(){
    this.auth.logoutSocial()
    window.location.reload()
  }

}
