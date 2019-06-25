import { Component, OnInit } from '@angular/core';
import { LANG } from 'src/theme/pt';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public lang = LANG
  constructor() { }

  ngOnInit() {
  }

}
