import { Module } from '@nestjs/common';
import { AnimaisService } from './animais.service';
import { AnimaisController } from './animais.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [AnimaisController],
  providers: [AnimaisService, PrismaService],
})
export class AnimaisModule { }
