import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { University } from './entities/university.entity';
import { Departments } from './entities/departments.entity';
import { Specialization } from './entities/specialization.entity';
import { Students } from './entities/students.entity';
import { UniversityResolver } from './university.resolver';
import { DepartmentsResolver } from './departments.resolver';
import { SpecializationResolver } from './specialization.resolver';
import { StudentsResolver } from './students.resolver';

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
   GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [UniversityResolver, DepartmentsResolver, SpecializationResolver, StudentsResolver],
})
export class AppModule {}