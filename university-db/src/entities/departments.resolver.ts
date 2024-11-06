import { Resolver, Query, Args } from '@nestjs/graphql';
import { Departments } from './departments.entity';
import { DepartmentsService } from './departments.service';

@Resolver(() => Departments)
export class DepartmentsResolver {
  constructor(private readonly departmentsService: DepartmentsService) {}

  @Query(() => [Departments])
  async departments(@Args('universityId') universityId: number) {
    return this.departmentsService.findByUniversityId(universityId);
  }
}
