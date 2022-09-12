import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from '../../infrastructure/interceptors/logging.interceptor';
import { ProductModule } from '../product/product.module';
import { ProductController } from '../product/product.controller';
import { ProductService } from '../product/product.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [ProductModule],
  controllers: [AppController, ProductController],
  providers: [
    AppService,
    ProductService,
    JwtService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
  exports: [JwtService, ProductService],
})
export class AppModule {}
