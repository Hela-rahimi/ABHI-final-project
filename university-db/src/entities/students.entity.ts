import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Specialization } from './specialization.entity';

@ObjectType()
@Entity()
export class Students {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @ManyToOne(() => Specialization, (specialization) => specialization.students)
  @Field(() => Specialization) // Expose specialization in GraphQL
  specialization: Specialization;
}
