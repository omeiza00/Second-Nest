import { Injectable, NestMiddleware } from '@nestjs/common';
import { json } from 'stream/consumers';

@Injectable()
export class ContentTypeMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const contentType = req.headers['content-type'];

    if (!contentType) {
      return res.status(400).json({
        message: 'content type is missing',
      });
    }

    if (contentType !== 'application/json') {
      return res.status(415).json({
        message: 'the header type must be in json format',
      });
    }
    next();
  }
}
