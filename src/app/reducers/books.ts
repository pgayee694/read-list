import { Book } from "../models/book.model";
import * as BooksActions from "./../actions/books.actions";
import { Action, createReducer, State } from "@ngrx/store";

export interface BooksState {
  books: Book[];
}

const initialState: BooksState = {
  books: [{ title: "TEST", authors: ["Test McTest"] }]
};

export function reducer(state: BooksState = initialState, action: Action) {
  switch (action.type) {
    case BooksActions.AddBook.type:
    default:
      return state;
  }
}

export const getBooks = (state: BooksState) => state.books;
