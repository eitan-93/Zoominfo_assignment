import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

const BACKEND_HOST_URL = "http://localhost:3080"

@Injectable({
  providedIn: 'root'
})

export class LoginContactsService {
  
  login(username,password) : Observable<Object>{
    let url = `${BACKEND_HOST_URL}/login`
    return this.http.get(url,{params:{ user : username, pass : password}})
  }
  contacts(id) : Observable<Object>{
    let url = `${BACKEND_HOST_URL}/contacts`
    return this.http.get(url,{params:{ id : id}})
  }
  constructor(private http :HttpClient) { }
}
