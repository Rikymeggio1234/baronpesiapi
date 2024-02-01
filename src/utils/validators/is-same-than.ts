import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsSameThan(property: string, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      // Register a custom validation decorator named 'isSameThan'
      name: 'isSameThan',
      target: object.constructor, // The target class where the decorator is applied
      propertyName: propertyName, // The name of the property to be validated
      constraints: [property], // The additional constraints are needed
      options: validationOptions, // Optional validation options
      validator: {
        validate(value: any, args: ValidationArguments) {
          // Check if the current value is same than a related value pass as parameter
          const [relatedPropertyName] = args.constraints; // Get name of related property pass as parameter
          const relatedValue = (args.object as any)[relatedPropertyName]; // Get value of related property pass as parameter
          return relatedValue === value ? true: false; // Check if current value is same than value of related property name pass as parameter
        }
      },
    });
  };
}