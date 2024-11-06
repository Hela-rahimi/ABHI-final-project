import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Specialization } from './specialization.entity';

@Injectable()
export class SpecializationService {
  constructor(
    @InjectRepository(Specialization)
    private specializationRepository: Repository<Specialization>,
  ) {}

  async findByDepartmentId(departmentId: number): Promise<Specialization[]> {
    return this.specializationRepository.find({ where: { department: { id: departmentId } }, relations: ['students'] });
  }
}
