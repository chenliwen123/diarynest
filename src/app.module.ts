import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection } from 'typeorm';
import { CatsModule } from './cats/cats.module';
import { Cats } from './cats/cats.entities';
import { DriayModule } from './diray/diray.module';
import { Diray } from './diray/diray.entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'nest',
      entities: [Cats, Diray],
      synchronize: true,
      logging: true,
    }),
    CatsModule,
    DriayModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
