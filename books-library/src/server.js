import { Server } from "miragejs";
import books from "./bookData/books.json";
export function makeServer() {
  let server = new Server({
    routes() {
      this.namespace = "api";

      this.get("/books", () => {
        return books;
      });
    },
  });

  return server;
}
