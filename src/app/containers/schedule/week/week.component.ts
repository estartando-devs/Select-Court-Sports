import { Component, OnInit } from '@angular/core';
import { LANG } from 'src/theme/pt';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss']
})
export class WeekComponent implements OnInit {

  public lang = LANG

  constructor() { }

  ngOnInit() {
  }

}
