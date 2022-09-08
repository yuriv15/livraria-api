import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivrosModule } from './livros/livros.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/livraria'), LivrosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
