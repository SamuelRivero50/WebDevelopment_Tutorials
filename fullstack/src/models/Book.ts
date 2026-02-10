export class Book {
  constructor(
    public id: number,
    public title: string,
    // corrección: usamos "category" en minúsculas para ser consistente
    public category: string,
    public price: number,

    public stock: number,
  ) {}

  public static findById(books: Book[], id: number): Book | undefined {
    // corrección: devolvemos undefined si no se encuentra el libro, no lanzamos error
    const book = books.find((book) => book.id === id);
    return book;
  }
}
