import {
  Controller,
  Post,
  Get,
  UseGuards,
  Body,
  Req,
  Param,
  Put,
  Patch,
  Delete,
  Res,
} from '@nestjs/common';
import { Request } from 'express';
import { ProductService } from './product.service';
import { JwtAuthGuard } from '../../infrastructure/jwt/jwt-auth.guard';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { DesactiveProductDto } from './dtos/desactive-product.dto';
import { FindByFiltersDto } from './dtos/find-by-filters.dto';

@Controller('/v1/product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/upload')
  async uploadFile(@Req() req, @Res() res) {
    const fileUpload = await this.productService.fileupload(req, res);
    return fileUpload;
  }

  @UseGuards(JwtAuthGuard)
  @Post('/create')
  async createProduct(@Body() body: CreateProductDto, @Req() req: Request) {
    const create = await this.productService.create(
      body,
      req.headers.authorization,
    );
    return create;
  }

  @UseGuards(JwtAuthGuard)
  @Put('/update')
  async updateProduct(@Body() body: UpdateProductDto, @Req() req: Request) {
    const create = await this.productService.update(
      body,
      req.headers.authorization,
    );
    return create;
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/desactive')
  async desactiveProduct(
    @Body() body: DesactiveProductDto,
    @Req() req: Request,
  ) {
    const create = await this.productService.desactiveProduct(
      body,
      req.headers.authorization,
    );
    return create;
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/delete')
  async deleteProduct(@Body() body: DesactiveProductDto, @Req() req: Request) {
    const create = await this.productService.deleteProduct(
      body,
      req.headers.authorization,
    );
    return create;
  }

  @Get('/:id')
  async getProductById(@Param('id') id: string) {
    const product = await this.productService.getProductById(id);
    return product;
  }

  @Post('/list/filters')
  async getProducs(@Body() body: FindByFiltersDto) {
    if (!body) {
      return;
    }
    const productsByCategories = await this.productService.findByCategories(
      body,
    );
    return productsByCategories;
  }

  @Get('/list/limit/:limit')
  async getProducsByLimits(@Param('limit') limit: string) {
    const list = await this.productService.getProducs(+limit);
    return list;
  }
}
