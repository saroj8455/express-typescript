import { Express,Request,Response,NextFunction } from "express";

function routes(app:Express) {

  app.get("/api/books",(req:Request,res:Response,next:NextFunction)=>{
    console.log("GET /api/books");
    res.send([{title:"Book1"},{title:"Book2"}]);
  })


}

export default routes;