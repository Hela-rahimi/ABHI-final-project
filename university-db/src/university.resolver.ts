import { Resolver, Query, Args } from '@nestjs/graphql';
import { University } from './entities/university.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Resolver(() => University)
export class UniversityResolver {
  constructor(
    @InjectRepository(University)
    private universityRepository: Repository<University>,
  ) {}

  @Query(() => [University])
  async universities() {
    return this.universityRepository.find({ relations: ['departments'] });
  }
}
