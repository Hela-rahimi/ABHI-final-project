import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Students } from './students.entity';
import { StudentsService } from './students.service';
import { StudentsResolver } from './students.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([Students]), // Register the Students entity
  ],
  providers: [StudentsService, StudentsResolver],
})
export class StudentsModule {}
