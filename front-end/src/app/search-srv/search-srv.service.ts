import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchSrvService {

  constructor( private http: HttpClient) { }

  public search(keyWord){

  }
  public getName(){
    return this.http.get('/api');
  }
}
