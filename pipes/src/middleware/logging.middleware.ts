import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

@Injectable()
export class LoggingMiddleware implements NestMiddleware{
    use(req: any, res: any, next: NextFunction) {
        console.log(`[${new Date().toISOString()}]`)
        next()
    }
}