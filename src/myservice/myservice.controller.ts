import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MyserviceService } from './myservice.service';
import { CreateMyserviceDto } from './dto/create-myservice.dto';
import { UpdateMyserviceDto } from './dto/update-myservice.dto';
import { ApiOperation,ApiTags } from '@nestjs/swagger'

@Controller('myservice')
@ApiTags('myservices')
export class MyserviceController {
  constructor(private readonly myserviceService: MyserviceService) {}

  @Post()
  @ApiOperation({summary:'this is create api'})
  create(@Body() createMyserviceDto: CreateMyserviceDto) {
    return this.myserviceService.create(createMyserviceDto);
  }

  @Get()
  @ApiOperation({summary:'this is get api'})
  findAll() {
    return this.myserviceService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary:'this is get api by id'})
  findOne(@Param('id') id: string) {
    return this.myserviceService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({summary:'this is update api by id'})
  update(@Param('id') id: string, @Body() updateMyserviceDto: UpdateMyserviceDto) {
    return this.myserviceService.update(+id, updateMyserviceDto);
  }

  @Delete(':id')
  @ApiOperation({summary:'this is delete api'})
  remove(@Param('id') id: string) {
    return this.myserviceService.remove(+id);
  }
}
