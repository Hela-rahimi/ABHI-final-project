import { Resolver, Query, Args } from '@nestjs/graphql';
import { Departments } from './entities/departments.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Resolver(() => Departments)
export class DepartmentsResolver {
  constructor(
    @InjectRepository(Departments)
    private departmentsRepository: Repository<Departments>,
  ) {}

  @Query(() => [Departments])
  async departments(@Args('universityId') universityId: number) {
    return this.departmentsRepository.find({ where: { university: { id: universityId } }, relations: ['specializations'] });
  }
}
