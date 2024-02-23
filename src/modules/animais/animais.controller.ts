import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { AnimaisService } from './animais.service';
import { Prisma } from '@prisma/client';

@Controller('animais')
export class AnimaisController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly animaisService: AnimaisService) { }

  @Post()
  async create(@Body() data: Prisma.AnimaisCreateInput) {
    return this.animaisService.create(data);
  }

  @Get()
  async findAll() {
    return this.animaisService.findAll();
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() data: Prisma.AnimaisUpdateInput,
  ) {
    return this.animaisService.update(+id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.animaisService.delete(+id);
  }
}
