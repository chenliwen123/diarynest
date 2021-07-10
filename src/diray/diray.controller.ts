import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Diray } from './diray.entities';
import { DirayService } from './diray.service';

@Controller('diray')
export class DirayController {
  constructor(private readonly DirayService: DirayService) {}
  @Get('/findAll')
  async findAll(): Promise<any> {
    let res = {
      state:200,
      data: await this.DirayService.findAll(),
      message:'请求成功'
    }
    return res
  }
  @Post('/create')
  async create(@Body() Param: { user: string; pid: string; content: string, time:string }) {
    const diray = new Diray();
    diray.user = Param.user;
    diray.pid = Param.pid || '';
    diray.content = Param.content;
    diray.time = Param.time;
    return this.DirayService.create(diray);
  }
}
