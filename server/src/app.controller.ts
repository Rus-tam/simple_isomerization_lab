import * as tf from '@tensorflow/tfjs';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { InitialDataDto } from './dto/initialData.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async processCalculation(@Body() initialData: InitialDataDto) {
    return this.appService.processCalculation(initialData);
  }
}
