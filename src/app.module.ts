import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyserviceModule } from './myservice/myservice.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [MyserviceModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
