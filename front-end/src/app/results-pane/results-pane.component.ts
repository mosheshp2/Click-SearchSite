import { Component, OnInit } from '@angular/core';
import { SearchSrvService } from '../search-srv/search-srv.service';

@Component({
  selector: 'app-results-pane',
  templateUrl: './results-pane.component.html',
  styleUrls: ['./results-pane.component.css']
})
export class ResultsPaneComponent implements OnInit {

  constructor(private searchSrv: SearchSrvService) {}

  public searchResults = [];
  public selectedItem = null;

  ngOnInit() {
    this.searchSrv.getResults()
        .subscribe(data => this.searchResults = data);
  }

  select(item){
    this.selectedItem = item;
  }

}
