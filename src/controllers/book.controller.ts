import { Request, Response, NextFunction } from 'express';

/**
 *
 * Define all handeler Mathod here
 */

function GetBook(req: Request, res: Response, next: NextFunction) {
  res.status(200).jsonp({
    message: 'Get Books',
  });
}

class Book {

  public static getBook(req: Request, res: Response, next: NextFunction) {
    res.status(200).jsonp({
      message: 'Get message from Book Class',
    });
  }
}


export {GetBook};
export default Book;
