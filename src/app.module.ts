import { Module } from '@nestjs/common';
import { NoticiasModule } from './modules/noticias/noticias.module';
import { AnimaisModule } from './modules/animais/animais.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [NoticiasModule, AnimaisModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
