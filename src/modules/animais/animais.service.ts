import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class AnimaisService {
  // eslint-disable-next-line prettier/prettier
  constructor(private prisma: PrismaService) { }

  async create(data: Prisma.AnimaisCreateInput) {
    const animais = await this.prisma.animais.create({ data });
    return animais;
  }

  async findAll() {
    const animais = await this.prisma.animais.findMany();
    return animais;
  }

  async update(id: number, data: Prisma.AnimaisUpdateInput) {
    const animais = await this.prisma.animais.update({
      where: { id },
      data,
    });
    return animais;
  }

  async delete(id: number) {
    return await this.prisma.animais.delete({
      where: {
        id,
      },
    });
  }
}
