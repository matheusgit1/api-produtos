import { registerDecorator, ValidationOptions } from 'class-validator';

export interface IProductFeatures {
  title: string;
  body: {
    [x: string]: any;
  };
}

export function IsProductFeatures(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'IsProductFeatures',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(values: IProductFeatures[]) {
          let isValid = true;
          values.forEach((one) => {
            if (!one.title || !one.body) {
              isValid = false;
            }
          });
          return isValid;
        },
      },
    });
  };
}
