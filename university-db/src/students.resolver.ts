import { Resolver, Query, Args } from '@nestjs/graphql';
import { Students } from './entities/students.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Resolver(() => Students)
export class StudentsResolver {
  constructor(
    @InjectRepository(Students)
    private studentsRepository: Repository<Students>,
  ) {}

  @Query(() => [Students])
  async students(@Args('specializationId') specializationId: number) {
    return this.studentsRepository.find({ where: { specialization: { id: specializationId } } });
  }
}
