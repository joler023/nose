import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { UserMapper } from './users.mapper';
import { UsersController } from './controllers/user.controller';
import { UsersRepository } from './users.repository';
import { UsersService } from './services/user.service';


@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UsersController],
  providers: [UserMapper, UsersRepository, UsersService]
})
export class UsersModule {}
