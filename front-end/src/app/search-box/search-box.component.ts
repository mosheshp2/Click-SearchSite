import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { SearchSrvService } from '../search-srv/search-srv.service'
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {switchMap, debounceTime, tap} from 'rxjs/operators';
import {Observable} from 'rxjs'

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  
  searchForm: FormGroup;
  autocompleteList: any;
  keyword = '';
  showAutocomplete = false;
  autoIsLoading = false;
  constructor(private searchSrv: SearchSrvService, private fb: FormBuilder) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      searchTerm: ['']
    });

    this.searchForm.get('searchTerm').valueChanges
      .pipe(
        debounceTime(300),
        tap(() => {
          this.toggleAutocomplete(true);
          this.toggleLoading(true);
        }),
        switchMap(value => this.searchSrv.searchAutocomplete(value))
      ).subscribe(a => {
        this.autocompleteList = a;
        this.toggleLoading(false);
      });
    }

  search(term){
    term = term || this.searchForm.get('searchTerm').value;
    
    this.searchSrv.search(term);

    this.toggleAutocomplete(false);
  }

  toggleAutocomplete(show){
    this.showAutocomplete = show;
  }
  toggleLoading(show){
    this.autoIsLoading = show;
  }
}
