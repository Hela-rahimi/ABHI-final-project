import { Resolver, Query, Args } from '@nestjs/graphql';
import { Students } from './students.entity';
import { StudentsService } from './students.service';

@Resolver(() => Students)
export class StudentsResolver {
  constructor(private readonly studentsService: StudentsService) {}

  @Query(() => [Students])
  async students(@Args('specializationId') specializationId: number) {
    return this.studentsService.findBySpecializationId(specializationId);
  }
}
