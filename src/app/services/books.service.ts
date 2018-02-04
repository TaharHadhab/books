import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Books} from "@app/models/books";
import {environment} from "../../environments/environment";

@Injectable()
export class BooksService {

  constructor(private http: HttpClient) { }

  public getbooks(): Observable<Books> {
    return this.http
      .get<Books>(environment.books_url)
      .map(value => <Books>value);
  }
}
