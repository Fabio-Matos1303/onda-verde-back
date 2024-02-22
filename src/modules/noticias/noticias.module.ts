import { Module } from '@nestjs/common';
import { NoticiasService } from './noticias.service';
import { NoticiasController } from './noticias.controller';
import { PrismaService } from '../../database/prisma.service';

@Module({
  controllers: [NoticiasController],
  providers: [NoticiasService, PrismaService],
})
// eslint-disable-next-line prettier/prettier
export class NoticiasModule { }
