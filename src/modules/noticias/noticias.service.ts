import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class NoticiasService {
  // eslint-disable-next-line prettier/prettier
  constructor(private prisma: PrismaService) { }

  async create(data: Prisma.NoticiasCreateInput) {
    const noticias = await this.prisma.noticias.create({
      data,
    });

    return noticias;
  }

  async findAll() {
    const noticias = await this.prisma.noticias.findMany();
    return noticias;
  }

  async update(id: number, data: Prisma.NoticiasUpdateInput) {
    const noticias = await this.prisma.noticias.update({
      where: { id },
      data,
    });
    return noticias;
  }

  async delete(id: number) {
    return await this.prisma.noticias.delete({
      where: {
        id,
      },
    });
  }
}
