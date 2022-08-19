import { Component, OnInit } from '@angular/core';
import { SearchCriteria } from 'src/app/models/search-criteria';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  public searchString: String = "";

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.searchString);
    let criteria = new SearchCriteria(this.searchString);
    this.searchService.searchUsers(criteria).subscribe();
  }

}
