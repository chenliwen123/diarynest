import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DirayController } from './diray.controller';
import { Diray } from './diray.entities';
import { DirayService } from './diray.service';

@Module({
  imports: [TypeOrmModule.forFeature([Diray])],
  controllers: [DirayController],
  providers: [DirayService],
})
export class DriayModule {}
