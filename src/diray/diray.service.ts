import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Diray } from './diray.entities';

@Injectable()
export class DirayService {
  constructor(
    @InjectRepository(Diray)
    private dirayRepository: Repository<Diray>,
  ) {}

  findAll(): Promise<Diray[]> {
    return this.dirayRepository.find();
  }

  findOne(id: number): Promise<Diray> {
    return this.dirayRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.dirayRepository.delete(id);
  }

  create(cats: Diray): Promise<Diray> {
    return this.dirayRepository.save(cats);
  }
}
