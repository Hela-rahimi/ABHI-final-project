import { Resolver, Query, Args } from '@nestjs/graphql';
import { Specialization } from './entities/specialization.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Resolver(() => Specialization)
export class SpecializationResolver {
  constructor(
    @InjectRepository(Specialization)
    private specializationRepository: Repository<Specialization>,
  ) {}

  @Query(() => [Specialization])
  async specializations(@Args('departmentId') departmentId: number) {
    return this.specializationRepository.find({ where: { department: { id: departmentId } }, relations: ['students'] });
  }
}
