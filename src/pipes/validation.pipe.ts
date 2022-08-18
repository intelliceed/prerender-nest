import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

import { ValidationException } from '../exceptions/validation.exception';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform (value: any, metadata: ArgumentMetadata): Promise<any> {
    const obj = plainToClass(metadata.metatype, value);
    const errors = await validate(obj);

    if (errors.length) {
      throw new ValidationException(errors);
    }
    return value;
  }
}
