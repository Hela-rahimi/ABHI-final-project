import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Departments } from './departments.entity';
import { DepartmentsService } from './departments.service';
import { DepartmentsResolver } from './departments.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([Departments]), // Register the Departments entity
  ],
  providers: [DepartmentsService, DepartmentsResolver],
})
export class DepartmentsModule {}
