import { Module } from '@nestjs/common';
import { NoticiasModule } from './modules/noticias/noticias.module';

@Module({
  imports: [NoticiasModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
