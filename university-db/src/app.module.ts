import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloDriver } from '@nestjs/apollo';
import { University } from './entities/university.entity';
import { Departments } from './entities/departments.entity';
import { Specialization } from './entities/specialization.entity';
import { Students } from './entities/students.entity';
import { UniversityResolver } from './entities/university.resolver';
import { DepartmentsResolver } from './entities/departments.resolver';
import { SpecializationResolver } from './entities/specialization.resolver';
import { StudentsResolver } from './entities/students.resolver';
import { UniversityService } from './entities/university.service';
import { DepartmentsService } from './entities/departments.service';
import { SpecializationService } from './entities/specialization.service';
import { StudentsService } from './entities/students.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'HELA',
      database: 'Universities',
      entities: [University, Departments, Specialization, Students],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([University, Departments, Specialization, Students]), // Add this line
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
  ],
  providers: [
    UniversityResolver,
    DepartmentsResolver,
    SpecializationResolver,
    StudentsResolver,
    UniversityService,
    DepartmentsService,
    SpecializationService,
    StudentsService,
  ],
})
export class AppModule {}
