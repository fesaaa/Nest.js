import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import fs from "fs";
import Alluser from '../mock/user.json'

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    let maxId = (Math.max(...Alluser.map((user) => user.id))) + 1;
    createUserDto = {id: maxId,...createUserDto}
    let listuser: CreateUserDto[] = Alluser;
    listuser.push(createUserDto)
    fs.writeFile('./src/mock/user.json', JSON.stringify(listuser), err => {
      // error checking
      if (err) throw err;

    });
    return `New data added id = ${createUserDto}`;
  }

  findAll() {
    return Alluser;
  }

  findOne(id: number) {
    let user = Alluser.find(x => x.id === id);
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const objIndex = Alluser.findIndex((obj) => obj.id = id )
    let listUser:UpdateUserDto[] = Alluser
    listUser[objIndex] = updateUserDto;
    fs.writeFile('./src/mock/user.json', JSON.stringify(listUser), err => {
      // error checking
      if (err) throw err;

    });


    return `This action updates a ${updateUserDto} user`;
  }

  remove(id: number) {
    const objIndex = Alluser.findIndex((obj) => obj.id === id )
    let listUser = Alluser
    listUser.splice(objIndex,1);
    fs.writeFile('./src/mock/user.json', JSON.stringify(listUser), err => {
      // error checking
      if (err) throw err;

    });
    return objIndex;
  }
}
