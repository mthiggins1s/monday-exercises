import { Component, signal } from '@angular/core';

export interface Book {
  id: string;
  title: string;
  description?: string;
}

@Component({
  selector: 'app-favorite-books',
  imports: [],
  templateUrl: './favorite-books.component.html',
  styleUrl: './favorite-books.component.css'
})
export class FavoriteBooksComponent {
  books = [
    {id: 1, title: 'book1', description: 'something about book 1'},
    {id: 2, title: 'book2', description: 'something about book 2'},
    {id: 3, title: 'book3', description: 'something about book 3'}
  ];

  selectedBook = signal<Book | null>(null);

  selectBook(book: Book) {
    this.selectedBook.set(book);
  }
}
