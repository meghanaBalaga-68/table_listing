import { Module } from '@nestjs/common';
import { ListService } from './list.service';
import { ListResolver } from './list.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { List } from './list.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([List]),

  ],
  providers: [ListService, ListResolver],
  exports: [ListService]
})
export class ListModule {}
