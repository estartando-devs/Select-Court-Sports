import { Component, OnInit } from '@angular/core';
import { LANG } from 'src/theme/pt';
import { AuthService } from 'services/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public lang = LANG;
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  signup(){
    let user = new User()
    user = {
      displayName: "Alan",
      email: "alan.techsafe@hotmail.com"
    }

  }

}
