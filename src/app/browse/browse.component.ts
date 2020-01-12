import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Book } from "../models/book.model";
import { BooksState, getBooks } from "../reducers/books";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-browse",
  templateUrl: "./browse.component.html",
  styleUrls: ["./browse.component.css"]
})
export class BrowseComponent implements OnInit {
  books$: Observable<Book[]>;
  books: Book[];

  constructor(store: Store<BooksState>) {
    this.books$ = store.select(getBooks);
  }

  ngOnInit() {
    this.books$.subscribe(books => (this.books = books));
  }
}
