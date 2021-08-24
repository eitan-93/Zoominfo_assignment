import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent implements OnInit {

  Contacts = [];
  pageEvent;
  length;

  pageSize = 10;
  currentPage = 0;
  dataSource: any;    
  chosenContact = {}

  searchContact : string;

  goToLogin() {
    this.router.navigate(['/']);  
  }
  
  sortFunc(a, b){
    if(a.firstname < b.firstname) { return -1; }
    if(a.firstname > b.firstname) { return 1; }
    return 0;
  }

  constructor(private route: ActivatedRoute,private router: Router) { 
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
            this.Contacts = this.router.getCurrentNavigation().extras.state.contacts.sort(this.sortFunc)

          this.dataSource = this.Contacts;
          this.currentPage = 0;
          this.length = this.Contacts.length;
          this.iterator();
          }
      });
  }

  public goToInfo(){
    this.router.navigate(['/info'],{ state:{ contacts : this.Contacts, chosen : this.chosenContact} });
  }

  public ngOnInit() {
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.iterator();
  }
  
  public iterator() {
    const end = (this.currentPage + 1) * this.pageSize ;
    const start = this.currentPage * this.pageSize;
    const part = this.Contacts.slice(start, end);
    this.dataSource = part;
  }


}