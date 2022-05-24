import { PartialType } from '@nestjs/mapped-types';
import { CreateMyserviceDto } from './create-myservice.dto';

export class UpdateMyserviceDto extends PartialType(CreateMyserviceDto) {}
