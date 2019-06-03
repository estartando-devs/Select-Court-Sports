import { Component, OnInit } from '@angular/core';
import { LANG } from 'src/theme/pt';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public lang = LANG;
  constructor() { }

  ngOnInit() {
  }

}
