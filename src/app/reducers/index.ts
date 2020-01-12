import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";
import { environment } from "../../environments/environment";
import { BooksState, reducer as booksReducer } from "./books";

export interface State {
  books: BooksState;
}

export const reducers: ActionReducerMap<State> = {
  books: booksReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

export const getBooksState = (state: State) => state.books;

export const getBooks = createSelector(getBooksState, state => state.books);
