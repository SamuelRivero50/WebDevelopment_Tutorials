import type { BookInterface } from '@/interfaces/BookInterface';
import { useBookStore } from '@/stores/bookstore.js';
export class BookService {
  static getBooks(): BookInterface[] {
    return useBookStore().books;
  }

  static getBookById(id: number): BookInterface | undefined {
    return useBookStore().books.find((book) => book.id === id);
  }
}
