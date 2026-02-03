import type { Request, Response } from "express";

export class ContactController {
  static contact(req: Request, res: Response): void {
    const viewData: { [key: string]: any } = {};
    viewData["title"] = "Contact";

    res.render("home/contact", { viewData: viewData });
  }
}
