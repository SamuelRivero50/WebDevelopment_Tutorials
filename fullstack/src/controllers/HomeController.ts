import type { Request, Response } from "express";
import { books } from "../data/Books.js";
import { Book } from "../models/Book.js";

export class HomeController {
  static index(req: Request, res: Response): void {
    const viewData: { [key: string]: any } = {};
    viewData["title"] = "Home";

    res.render("home/index", { viewData: viewData });
  }

  static about(req: Request, res: Response): void {
    const viewData: { [key: string]: any } = {};
    viewData["title"] = "About";

    res.render("home/about", { viewData: viewData });
  }

  // corrección: nombre más claro y tipos correctos
  static books(req: Request, res: Response): void {
    const viewData: { [key: string]: any } = {};
    viewData["title"] = "Books"; // corrección: añadimos título para la cabecera
    viewData["books"] = books;

    // corrección: siempre pasamos un objeto con viewData
    res.render("home/books", { viewData: viewData });
  }

  static show(req: Request, res: Response): void {
    // corrección: normalizamos el parámetro id a un solo string
    const rawId = Array.isArray(req.params.id)
      ? req.params.id[0]
      : req.params.id;

    // corrección: comprobamos que el id exista
    if (!rawId) {
      res.status(400).send("Invalid book id");
      return;
    }

    // corrección: convertimos el id a número de forma segura
    const id = Number.parseInt(rawId, 10);

    // corrección: si no es un número válido devolvemos 400
    if (Number.isNaN(id)) {
      res.status(400).send("Invalid book id");
      return;
    }

    const book = Book.findById(books, id);

    // corrección: si no encontramos el libro devolvemos 404
    if (!book) {
      res.status(404).send("Book not found");
      return;
    }

    const viewData: { [key: string]: any } = {};
    viewData["title"] = book.title; // corrección: título dinámico del libro
    viewData["book"] = book; // corrección: pasamos book dentro de viewData

    res.render("home/show", { viewData: viewData });
  }
}
