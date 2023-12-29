import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private UsersService: UsersService){

    }

    @Post('/registro')
    createUser(@Body() newUser : CreateUserDTO){
        this.UsersService.createUser(newUser);
    }
}
