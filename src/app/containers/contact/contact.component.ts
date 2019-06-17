import { Component, OnInit } from '@angular/core';
import { LANG } from 'src/theme/pt';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public lang = LANG;
  constructor() { }

  back(){
    window.history.back();
  }

  ngOnInit() {
  }

}
