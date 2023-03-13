import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserDTO } from '../user.dto';
import { UsersService } from '../services/user.service';
import {ApiTags} from '@nestjs/swagger'
import * as bcrypt from 'bcrypt'

@Controller('users')
@ApiTags('CRUD')
export class UsersController {

    constructor(private usersService: UsersService){}

    @Get()
    async getAllUsers(): Promise<UserDTO[]> {
        return await this.usersService.getAllUsers();
    }

    @Get(':id')
    async getUserById(@Param('id') id: number): Promise<UserDTO> {
        return await this.usersService.getUserById(id);
    }

    @Post()
    async newUser(@Body() user: UserDTO): Promise<UserDTO> {
        const hashedPassword = await bcrypt.hash(user.password, 12);
        user.password = hashedPassword;
        return await this.usersService.newUser(user);
    }

    // @Post()
    // async login(@Body() user: UserDTO): Promise<UserDTO> {
    //     const hashedPassword = await bcrypt.hash(user.password, 12);
    //     user.password = hashedPassword;
    //     return await this.usersService.newUser(user);
    // }

    @Put(':id')
    async updateUser(@Param('id') id: number, @Body() user: UserDTO): Promise<UserDTO> {
        return await this.usersService.updateUser(id, user);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: number): Promise<void> {
        return await this.usersService.deleteUser(id);
    }
}