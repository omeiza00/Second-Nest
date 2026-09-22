import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthController } from './Auth/auth.controller.js';
import { LoggingMiddleware } from './middleware/logging.middleware.js';
import { ContentTypeMiddleware } from './middleware/content-type/content-type.middleware.js';

@Module({
  imports: [],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggingMiddleware).forRoutes('*')
    // consumer.apply(ContentTypeMiddleware).forRoutes('/client/*')
    // consumer.apply(ContentTypeMiddleware).forRoutes({
    //   path: 'client/*', method:RequestMethod.GET
    // })
    // consumer.apply(ContentTypeMiddleware).exclude({
    //   path: 'client/route4', method: RequestMethod.POST
    // }, {
    //   path:'client/route2', method: RequestMethod.GET
    // }).forRoutes('client/*')
    consumer.apply(ContentTypeMiddleware).exclude({
      path: 'client/route4', method: RequestMethod.POST
    }, {
      path:'client/route2', method: RequestMethod.GET
    }).forRoutes(AppController)
  }
}
