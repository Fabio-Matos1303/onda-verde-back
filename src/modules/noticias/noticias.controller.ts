import { Body, Controller, Post } from '@nestjs/common';
import { NoticiasService } from './noticias.service';
import { Prisma } from '@prisma/client';

@Controller('noticias')
export class NoticiasController {
  constructor(private readonly noticiasService: NoticiasService) { }

  @Post()
  async create(@Body() data: Prisma.NoticiasCreateInput) {
    return this.noticiasService.create(data);
  }
}
