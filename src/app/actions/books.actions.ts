import { Book } from "../models/book.model";
import { props, createAction } from "@ngrx/store";

export const AddBook = createAction("[BOOKS] Add", props<Book>());

export const BookActions = AddBook.type;
