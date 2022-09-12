import {
  IsString,
  IsArray,
  MinLength,
  MaxLength,
  IsNumber,
} from 'class-validator';
import {} from 'brazilian-class-validator';
import {
  IsProductFeatures,
  IProductFeatures,
} from '../decorators/IsProductFeatures.decorator';

export class CreateProductDto {
  @IsString()
  @MinLength(10)
  @MaxLength(200)
  name: string;

  @IsNumber()
  price: number;

  @IsString()
  @MaxLength(3000)
  description?: string;

  @IsArray()
  categories: string;

  @IsString()
  mainCategories: string;

  @IsNumber()
  installments?: number;

  @IsArray()
  images: string;

  @IsNumber()
  discount?: number;

  @IsNumber()
  stocks: number;

  @IsString()
  marc?: string;

  @IsString()
  conditions?: string;

  @IsProductFeatures({ message: 'product-feature body is invalid' })
  features: IProductFeatures;
}
