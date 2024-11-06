import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Students } from './students.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Students)
    private studentsRepository: Repository<Students>,
  ) {}

  async findBySpecializationId(specializationId: number): Promise<Students[]> {
    return this.studentsRepository.find({ where: { specialization: { id: specializationId } } });
  }
}
