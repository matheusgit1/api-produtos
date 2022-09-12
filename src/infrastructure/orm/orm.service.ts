import { ProductsEntity } from './entities/product.entity';
import { ProductsExcludedEntity } from './entities/product-excluded.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ORMService {
  constructor(
    @InjectRepository(ProductsEntity)
    private readonly ormService: Repository<ProductsEntity>,
    @InjectRepository(ProductsExcludedEntity)
    private readonly ormServiceExcluded: Repository<ProductsExcludedEntity>,
  ) {}

  public async findOneById(productId: string): Promise<ProductsEntity> {
    const product = await this.ormService.findOne({ where: { id: productId } });
    // const query = this.ormService.query('select * from tb_product where tb_product.id = $1',[productId])
    return product;
  }

  public async updateOneById(body: ProductsEntity, userId): Promise<void> {
    await this.ormService
      .createQueryBuilder()
      .update(ProductsEntity)
      .set({ ...body })
      .where('id = :id', { id: body.id })
      .andWhere('userId = :userId', { userId: userId })
      .execute();

    return;
  }

  public async createOne(
    body: ProductsEntity,
    userId: string,
  ): Promise<ProductsEntity> {
    const newProduct = await this.ormService.create({
      ...body,
      userId: userId,
    });
    const savedProduct = await this.ormService.save(newProduct);
    return savedProduct;
  }

  public async find(limits: number): Promise<ProductsEntity[]> {
    const list = await this.ormService.find({ skip: 20 * limits, take: 20 });
    return list;
  }

  public async desactiveOne(productId, userId): Promise<void> {
    await this.ormService
      .createQueryBuilder()
      .update(ProductsEntity)
      .set({ isActive: false })
      .where('id = :id', { id: productId })
      .andWhere('userId = :userId', { userId: userId })
      .execute();

    return;
  }

  public async deleteOne(productId, userId): Promise<void> {
    const toExcluded = await this.ormService.findOne({
      where: { id: productId, userId: userId },
    });
    if (toExcluded) {
      const toSave = await this.ormServiceExcluded.create(toExcluded);
      await this.ormServiceExcluded.save(toSave);
    }

    await this.ormService
      .createQueryBuilder()
      .delete()
      .from(ProductsEntity)
      .where('id = :id', { id: productId })
      .andWhere('userId = :userId', { userId: userId })
      .execute();
    return;
  }

  public async findByFilters(filters: {
    categories: any;
    minValue?: number;
    maxValue?: number;
    dtPublication?: Date;
    dtLimit?: Date;
    supLimitRatingStar?: number;
  }): Promise<any> {
    const rowResult = [];
    for (let index = 0; index <= filters.categories.length - 1; index++) {
      const findByCategorie = await this.ormService
        .createQueryBuilder()
        .where(':categories = ANY(co_product_categories);', {
          categories: `${filters.categories[index]}`,
        })
        .getMany();
      rowResult.push(findByCategorie);
    }

    const values = rowResult.flat().filter(function (a) {
      return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
    }, Object.create(null));

    return values;
  }
}
