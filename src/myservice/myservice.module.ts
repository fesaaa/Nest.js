import { Module } from '@nestjs/common';
import { MyserviceService } from './myservice.service';
import { MyserviceController } from './myservice.controller';

@Module({
  controllers: [MyserviceController],
  providers: [MyserviceService]
})
export class MyserviceModule {}
