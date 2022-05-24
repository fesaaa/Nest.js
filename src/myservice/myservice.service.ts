import { Injectable } from '@nestjs/common';
import { CreateMyserviceDto } from './dto/create-myservice.dto';
import { UpdateMyserviceDto } from './dto/update-myservice.dto';


@Injectable()
export class MyserviceService {
  create(createMyserviceDto: CreateMyserviceDto) {
    return 'This action adds a new myservice';
  }

  findAll() {
    return `This action returns all myservice`;
  }

  findOne(id: number) {
    return `This action returns a #${id} myservice`;
  }

  update(id: number, updateMyserviceDto: UpdateMyserviceDto) {
    return `This action updates a #${id} myservice`;
  }

  remove(id: number) {
    return `This action removes a #${id} myservice`;
  }
}
