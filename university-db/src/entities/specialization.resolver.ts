import { Resolver, Query, Args } from '@nestjs/graphql';
import { Specialization } from './specialization.entity';
import { SpecializationService } from './specialization.service';

@Resolver(() => Specialization)
export class SpecializationResolver {
  constructor(private readonly specializationService: SpecializationService) {}

  @Query(() => [Specialization])
  async specializations(@Args('departmentId') departmentId: number) {
    return this.specializationService.findByDepartmentId(departmentId);
  }
}
