import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsEntity } from '../../infrastructure/orm/entities/product.entity';
import { ProductsExcludedEntity } from '../../infrastructure/orm/entities/product-excluded.entity';
import { JwtModule } from '@nestjs/jwt';
import { ORMService } from '../../infrastructure/orm/orm.service';
import { OrmModule } from '../../infrastructure/orm/orm.module';
import { JwtStrategy } from '../../infrastructure/jwt/jwt.strategy';

import { MulterModule } from '@nestjs/platform-express';
import { ImageUploadService } from '../../infrastructure/services/uploads.service';
import { ImageUploadModule } from '../../infrastructure/services/upload.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([ProductsEntity, ProductsExcludedEntity]),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRES_IN },
    }),
    MulterModule.register({
      dest: './uploads',
    }),
    OrmModule,
    ImageUploadModule,
  ],
  providers: [ProductService, ORMService, JwtStrategy, ImageUploadService],
  controllers: [ProductController],
  exports: [ProductService, ORMService, ImageUploadService],
})
export class ProductModule {}
