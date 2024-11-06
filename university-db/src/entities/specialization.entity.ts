import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Departments } from './departments.entity';
import { Students } from './students.entity';

@ObjectType()
@Entity()
export class Specialization {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @ManyToOne(() => Departments, (department) => department.specializations)
  @Field(() => Departments) // Expose department in GraphQL
  department: Departments;

  @Field(() => [Students], { nullable: true }) // Ensure this field is exposed in the GraphQL schema
  @OneToMany(() => Students, (student) => student.specialization, { nullable: true }) // Allow null values
  students: Students[];
}
