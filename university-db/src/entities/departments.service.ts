import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Departments } from './departments.entity';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(Departments)
    private departmentsRepository: Repository<Departments>,
  ) {}

  async findByUniversityId(universityId: number): Promise<Departments[]> {
    return this.departmentsRepository.find({
      where: { university: { id: universityId } },
      relations: ['specializations'], // Ensure that specializations are loaded
    });
  }
}
