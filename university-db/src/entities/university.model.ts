import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Departments } from './departments.entity';

@ObjectType()
export class University {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => [Departments])
  departments: Departments[];
}
