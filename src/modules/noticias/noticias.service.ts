import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class NoticiasService {
  constructor(private prisma: PrismaService) { }

  async create(data: Prisma.NoticiasCreateInput) {
    const noticias = await this.prisma.noticias.create({
      data,
    });

    return noticias;
  }
}
