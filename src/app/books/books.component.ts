import {Component, OnDestroy, OnInit} from '@angular/core';
import {BooksService} from '@app/services/books.service';
import {Book} from "@app/models/books";
import {Store} from "@ngrx/store";
import {State} from '@app/ngrx/reducers/reducers';
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit, OnDestroy {

  initBooks: Array<Book>;
  books: Array<Book>;
  filter: string;
  name$: Observable<string>;
  subscription: Subscription;

  constructor(private booksService: BooksService, private store: Store<State>) {
  }

  ngOnInit() {
    this.name$ = this.store.select(state => state.authentification.name);
    this.subscription = this.booksService.getbooks().shareReplay().subscribe(books => {
      this.initBooks = books.data;
      this.books = books.data;
    });
  }

  onFilter() {
    this.books = [];
    if (!!this.filter) {
      for (let book of this.initBooks) {
        if (book.name.indexOf(this.filter) > -1) {
          this.books.push(book);
        }
      }
    } else {
      this.books = this.initBooks;
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
