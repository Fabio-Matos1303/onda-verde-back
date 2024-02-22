import { Controller } from '@nestjs/common';
import { AnimaisService } from './animais.service';

@Controller('animais')
export class AnimaisController {
  constructor(private readonly animaisService: AnimaisService) {}
}
