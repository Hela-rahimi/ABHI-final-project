import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Departments } from './departments.entity';

@ObjectType()
@Entity()
export class University {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field(() => [Departments]) // Add this line
  @OneToMany(() => Departments, (department) => department.university)
  departments: Departments[];
}