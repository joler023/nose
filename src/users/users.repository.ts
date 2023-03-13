import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { UserDTO } from './user.dto';
import { UserEntity } from './entities/user.entity';
import { UserMapper } from './users.mapper';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    private mapper: UserMapper,
  ) {}

  getAllUsers(): Promise<UserEntity[]> {
    return this.usersRepository.find();
  }

  getUserById(id: number): Promise<UserEntity> {
    return this.usersRepository.findOne({
      where: {
        userId: id
      },
    });
  }

  newUser(userDTO: UserDTO): Promise<UserEntity> {
    const newUser = this.mapper.dtoToEntity(userDTO);
    return this.usersRepository.save(newUser);
  }

  async updateUser(id: number, userDTO: UserDTO): Promise<UserEntity> {
    userDTO.id = id;
    const updateUser = this.mapper.dtoToEntity(userDTO);
    await this.usersRepository.update(id, updateUser);
    return this.usersRepository.findOne({
      where: {
        userId: id 
      },
    });
  }

  deleteUser(id: number): Promise<DeleteResult> {
    return this.usersRepository.delete(id);
  }
}
