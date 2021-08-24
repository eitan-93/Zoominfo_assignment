import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.css']
})
export class InfoPageComponent implements OnInit {

  Contacts = []
  contactInfo = {username : "", password : "", firstname : "", lastname : "", email : "", contacts : [], image: '',about:''}

  constructor(private route: ActivatedRoute,private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
            this.Contacts = this.router.getCurrentNavigation().extras.state.contacts
            this.contactInfo = this.router.getCurrentNavigation().extras.state.chosen
          }
      });

   }

  ngOnInit(): void {
  }

  goBackToContacts() {
    this.router.navigate(['/contacts'],{ state:{ contacts : this.Contacts} });  }

}
