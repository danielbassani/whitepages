import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

import { SearchCriteria } from '../models/search-criteria';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  public searchUsers(searchCriteria: SearchCriteria) : any {
    return this.httpClient.post("http://localhost:8080/users/search", searchCriteria).pipe(
      tap(resp => console.log(resp))
    );
  }
}
