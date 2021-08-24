import { Component, OnInit } from '@angular/core';
import { LoginContactsService } from 'src/app/services/login-contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private loginContactsService: LoginContactsService,private router: Router/*,private store: Store*/) { }
  res = { message: "", logged : false, id : 0};

  Contacts = [];
  username : string;
  password : string;
  
  public ngOnInit(): void {
  }

  public goToContacts() {
    this.logIn()
  }

  public onKeyUser(event: any) { 
    this.username = event.target.value;
  }

  public onKeyPass(event: any) { 
    this.password = event.target.value;
  }
  
  public logIn() {

    this.loginContactsService.login(this.username,this.password)
      .subscribe((results: any ) => {
        if((results === undefined)){
          this.res = {message: "error", logged : false, id : 0 }
          this.Contacts = []
        }
        else  {
          this.res = results
          

          if(this.res.logged){

            this.loginContactsService.contacts(results.id)
              .subscribe((results: any ) => {
                if((results === undefined)){
                  this.res = {message: "error", logged : false,  id : 0}
                  this.Contacts = []
                }
                else  {

                  this.Contacts = results.user
                  this.router.navigate(['/contacts'],{ state:{ contacts : results.user[0].contacts} });
                }
            })

          }    
        }
        console.log(results);
      });
  }

  
}
