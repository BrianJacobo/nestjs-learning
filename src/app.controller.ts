import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    //aqui está usando el metodo hello
    //de la clase AppService de "app.service.ts"
    return this.appService.getHello();
  }
}
