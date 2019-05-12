import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, ReplaySubject } from 'rxjs';
import { filter, flatMap } from 'rxjs/operators';
import { Result } from '../results.class';

@Injectable({
  providedIn: 'root'
})
export class SearchSrvService {

  private results = new ReplaySubject<any>();

  constructor( private http: HttpClient) { }

  public searchAutocomplete(term): Observable<any> {
    return this.http.get('/api',{ params: {term: term } });
  }
  
  public search(term) {
   this.http.get('/api',{ params: {term: term } })
      .subscribe(a => this.results.next(a));
  }
  
  public getResults(){
    return this.results.asObservable();
  }
}
