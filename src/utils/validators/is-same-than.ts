import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsSameThan(property: string, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isSameThan',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;
          const relatedValue = (args.object as any)[relatedPropertyName];
          return relatedValue === value ? true: false;
        }
      },
    });
  };
}

// FOR TO USE
// @IsGreateThan('[name_value]', { message: '[current_value] value must to be greater then [name_value]' })

//[name_value] = name of other params of current class to validate
//[current_value] = name of current params of current class to validate