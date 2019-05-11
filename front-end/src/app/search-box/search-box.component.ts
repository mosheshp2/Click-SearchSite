import { Component, EventEmitter, Output } from '@angular/core';
import { SearchSrvService } from '../search-srv/search-srv.service'

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  
  constructor(private searchSrv: SearchSrvService) {}
  
  autocompleteList = [];
  keyword = '';
  showAutocomplete = false;

  autocomplete(term) {
    this.showAutocomplete = true;
    this.autocompleteList = ['david', 'moshe', 'avi'];
  }
  
  searchKeyup(event){
    this.keyword = event.value;
  }
  search(term){
    this.searchSrv.search(term);
    
  }

}
