import { Module } from '@nestjs/common';
import { NoticiasModule } from './modules/noticias/noticias.module';
import { AnimaisModule } from './modules/animais/animais.module';

@Module({
  imports: [NoticiasModule, AnimaisModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
