import { Resolver, Query } from '@nestjs/graphql';
import { University } from './university.entity';
import { UniversityService } from './university.service';

@Resolver(() => University)
export class UniversityResolver {
  constructor(private readonly universityService: UniversityService) {}

  @Query(() => [University])
  async universities() {
    return this.universityService.findAll();
  }
}
