import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { Cats } from './cats.entities';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  @Get('/findAll')
  findAll(): Promise<Cats[]> {
    return this.catsService.findAll();
  }
  @Post('/create')
  async create(@Body() catsParam: { firstName: string; lastName: string }) {
    const cats = new Cats();
    cats.firstName = catsParam.firstName;
    cats.lastName = catsParam.lastName;
    cats.isActive = true;
    return this.catsService.create(cats);
  }
}
