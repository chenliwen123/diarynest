import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Diray } from './diray.entities';
import { DirayService } from './diray.service';

@Controller('diray')
export class DirayController {
  constructor(private readonly DirayService: DirayService) {}
  @Get('/findAll')
  findAll(): Promise<Diray[]> {
    return this.DirayService.findAll();
  }
  @Post('/create')
  async create(@Body() Param: { user: string; pid: string; content: string }) {
    const diray = new Diray();
    diray.user = Param.user;
    diray.pid = Param.pid || '';
    diray.content = Param.content;
    return this.DirayService.create(diray);
  }
}
