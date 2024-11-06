import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { University } from './university.entity';
import { Specialization } from './specialization.entity';

@ObjectType()
@Entity()
export class Departments {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @ManyToOne(() => University, (university) => university.departments)
  university: University;

  @Field(() => [Specialization], { nullable: 'itemsAndList' }) // Ensure this is nullable
  @OneToMany(() => Specialization, (specialization) => specialization.department, { nullable: true }) // Allow null values
  specializations: Specialization[];
}
