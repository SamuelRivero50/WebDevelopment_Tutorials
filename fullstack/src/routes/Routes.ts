import { Router } from "express";
import { HomeController } from "../controllers/HomeController.js";
import { ContactController } from "../controllers/ContactController.js";

export default class Routes {
  static initializeRoutes(): Router {
    const router = Router();

    router.get("/", HomeController.index);
    router.get("/about", HomeController.about);
    router.get("/contact", ContactController.contact);
    // corrección: ruta más clara para la lista de libros
    router.get("/books", HomeController.books);
    router.get("/books/:id", HomeController.show);
    return router;
  }
}
