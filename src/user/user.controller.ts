import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation,ApiTags } from '@nestjs/swagger'

@Controller('user')
@ApiTags('userService')

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({summary:'this is create user'})
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiOperation({summary:'this is get user'})
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary:'this is get user by id'})
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({summary:'this is update user by id'})
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({summary:'this is delete user by id'})
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
