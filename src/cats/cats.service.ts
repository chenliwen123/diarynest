import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cats } from './cats.entities';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cats)
    private catsRepository: Repository<Cats>,
  ) {}

  findAll(): Promise<Cats[]> {
    return this.catsRepository.find();
  }

  findOne(id: number): Promise<Cats> {
    return this.catsRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.catsRepository.delete(id);
  }

  create(cats: Cats): Promise<Cats> {
    return this.catsRepository.save(cats);
  }
}
