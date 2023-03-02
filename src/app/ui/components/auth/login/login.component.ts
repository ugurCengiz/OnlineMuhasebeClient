import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { ValidInputDirective } from 'src/app/common/directives/valid-input.directive';
import { LoadingButtonComponent } from 'src/app/common/components/loading-button/loading-button.component';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule,ValidInputDirective,LoadingButtonComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  isloading: boolean = false;

  constructor(
    private _auth : AuthService,
  
  ){
   
  }

  login(form:NgForm){
    if(form.valid){
      this.isloading=true
     this._auth.login(form.value);
    } 
  }
}
