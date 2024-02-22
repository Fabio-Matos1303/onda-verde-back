import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { NoticiasService } from './noticias.service';
import { Prisma } from '@prisma/client';

@Controller('noticias')
export class NoticiasController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly noticiasService: NoticiasService) { }

  @Post()
  async create(@Body() data: Prisma.NoticiasCreateInput) {
    return this.noticiasService.create(data);
  }

  @Get()
  async findAll() {
    return this.noticiasService.findAll();
  }

  @Put()
  async update(@Body() data: Prisma.NoticiasUncheckedCreateInput) {
    return this.noticiasService.update(data.id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.noticiasService.delete(+id);
  }
}
