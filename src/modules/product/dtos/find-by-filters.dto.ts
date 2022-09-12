import {
  IsString,
  IsNumber,
  IsDate,
  IsOptional,
  IsArray,
} from 'class-validator';

export class FindByFiltersDto {
  @IsArray()
  @IsOptional()
  categories: string;

  @IsNumber()
  @IsOptional()
  minValue?: number;

  @IsNumber()
  @IsOptional()
  maxValue?: number;

  @IsDate()
  @IsOptional()
  dtPublication?: Date;

  @IsDate()
  @IsOptional()
  dtLimit?: Date;

  @IsNumber()
  @IsOptional()
  supLimitRatingStar?: number;
}
