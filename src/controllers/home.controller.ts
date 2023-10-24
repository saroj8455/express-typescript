import { Request, Response, NextFunction } from 'express';

class Home {
  public static displayHomePage(
    req: Request,
    res: Response,
    next: NextFunction
  ) {

    res.status(200).jsonp({
      message: "Welcome to the API"
    })
  }
}


export default Home;