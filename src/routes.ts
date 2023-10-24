import { Express, Request, Response, NextFunction } from 'express';
import Book, {GetBook} from './controllers/book.controller';

function routes(app: Express) {
  // app.get("/api/books",(req:Request,res:Response,next:NextFunction)=>{
  //   console.log("GET /api/books");
  //   res.send([{title:"Book1"},{title:"Book2"}]);
  // })

  app.get('/api/books', GetBook);
  app.get('/api/v1/books', Book.getBook);
}

export default routes;
