import { IsUUID } from 'class-validator';
import {} from 'brazilian-class-validator';

export class DesactiveProductDto {
  @IsUUID()
  id: string;
}
