import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserDTO } from '../user.dto';
import { UsersService } from '../services/user.service';

@Controller('users')
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
        return await this.usersService.newUser(user);
    }

    @Put(':id')
    async updateUser(@Param('id') id: number, @Body() user: UserDTO): Promise<UserDTO> {
        return await this.usersService.updateUser(id, user);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: number): Promise<void> {
        return await this.usersService.deleteUser(id);
    }

}