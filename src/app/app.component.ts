import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'select-court-sports';
  isLoading = false
  ngOnInit(){
    setInterval(()=>this.isLoading = !this.isLoading, 3000)
  }

  handle = () => {
    this.test()
  }

  test = () => {
    alert("test handle button")
  }
}
